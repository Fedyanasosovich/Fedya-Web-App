"use client";
import React, { useEffect, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { IoIosPlayCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";

const page = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [videoData, setVideoData] = useState([]);
  const [thumbnails, setThumbnails] = useState({});
  const [fetchCall, setFetchCall] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);
  const [debugInfo, setDebugInfo] = useState({});
  const [videoErrors, setVideoErrors] = useState({});

  // Mock data for testing - replace with your actual API call
  const mockVideoData = [
    {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      key: "sample_video_1.mp4"
    },
    {
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", 
      key: "sample_video_2.mp4"
    }
  ];

  async function fetchAllFileUrls(bucketName) {
    try {
      // Add debug logging
      console.log("Fetching URLs for bucket:", bucketName);
      
      const response = await fetch("/api/getPresignedUrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bucketName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("API Response:", data);
      
      setFetchCall(true);
      setVideoData(data.urls || []);
      
      // Debug: Log each URL
      if (data.urls) {
        data.urls.forEach((item, index) => {
          console.log(`Video ${index}:`, item);
          testVideoUrl(item.url, index);
        });
      }
    } catch (error) {
      console.error("Error fetching file URLs:", error);
      setDebugInfo(prev => ({
        ...prev,
        fetchError: error.message
      }));
      
      // Use mock data for testing
      console.log("Using mock data for testing");
      setVideoData(mockVideoData);
      setFetchCall(true);
    }
  }

  // Test if video URL is accessible
  const testVideoUrl = async (url, index) => {
    try {
      const response = await fetch(url, { method: 'HEAD' });
      setDebugInfo(prev => ({
        ...prev,
        [`video_${index}`]: {
          url: url,
          status: response.status,
          accessible: response.ok,
          headers: Object.fromEntries(response.headers.entries())
        }
      }));
    } catch (error) {
      setDebugInfo(prev => ({
        ...prev,
        [`video_${index}`]: {
          url: url,
          error: error.message,
          accessible: false
        }
      }));
    }
  };

  // Enhanced thumbnail generation with error handling
  const generateThumbnail = (videoUrl, index) => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous";
    video.preload = "metadata";
    
    let currentTime = 1; // Start at 1 second
    const maxRetries = 5;
    let retries = 0;

    const captureFrame = () => {
      try {
        const canvas = document.createElement("canvas");
        canvas.width = video.videoWidth || 320;
        canvas.height = video.videoHeight || 240;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const isBlackFrame = isBlack(imageData);

        if (!isBlackFrame || retries >= maxRetries) {
          const thumbnailUrl = canvas.toDataURL("image/png");
          setThumbnails((prev) => ({ ...prev, [index]: thumbnailUrl }));
        } else {
          retries++;
          currentTime += 2;
          video.currentTime = currentTime;
        }
      } catch (error) {
        console.error(`Thumbnail generation error for video ${index}:`, error);
        setVideoErrors(prev => ({
          ...prev,
          [`thumbnail_${index}`]: error.message
        }));
      }
    };

    video.onloadedmetadata = () => {
      console.log(`Video ${index} metadata loaded:`, {
        duration: video.duration,
        videoWidth: video.videoWidth,
        videoHeight: video.videoHeight
      });
      video.onseeked = captureFrame;
      video.currentTime = currentTime;
    };

    video.onerror = (e) => {
      console.error(`Video ${index} load error:`, e);
      setVideoErrors(prev => ({
        ...prev,
        [`video_${index}`]: `Failed to load video: ${video.error?.message || 'Unknown error'}`
      }));
    };

    const isBlack = (imageData) => {
      const { data } = imageData;
      for (let i = 0; i < Math.min(data.length, 1000); i += 4) {
        if (data[i] > 10 || data[i + 1] > 10 || data[i + 2] > 10) {
          return false;
        }
      }
      return true;
    };
  };

  // Handle video play errors
  const handleVideoError = (e, index) => {
    console.error(`Video ${index} playback error:`, e);
    setVideoErrors(prev => ({
      ...prev,
      [`playback_${index}`]: e.target.error?.message || 'Playback error'
    }));
  };

  useEffect(() => {
    if (!fetchCall) {
      fetchAllFileUrls("fedyanasosovich.com");
    }
  }, [fetchCall]);

  useEffect(() => {
    if (videoData.length > 0) {
      videoData.forEach((item, index) => {
        if (!thumbnails[index]) {
          generateThumbnail(item.url, index);
        }
      });
    }
  }, [videoData]);

  return (
    <>
      {/* Debug Panel */}
      <div className="bg-gray-900 text-white p-4 mb-4">
        <h2 className="text-xl mb-2">Debug Information</h2>
        <div className="text-sm">
          <p>Videos loaded: {videoData.length}</p>
          <p>Fetch completed: {fetchCall ? 'Yes' : 'No'}</p>
          <p>Thumbnails generated: {Object.keys(thumbnails).length}</p>
          
          {Object.keys(debugInfo).length > 0 && (
            <details className="mt-2">
              <summary className="cursor-pointer">API Debug Info</summary>
              <pre className="text-xs mt-2 bg-gray-800 p-2 rounded overflow-auto">
                {JSON.stringify(debugInfo, null, 2)}
              </pre>
            </details>
          )}
          
          {Object.keys(videoErrors).length > 0 && (
            <details className="mt-2">
              <summary className="cursor-pointer text-red-400">Video Errors</summary>
              <pre className="text-xs mt-2 bg-red-900 p-2 rounded overflow-auto">
                {JSON.stringify(videoErrors, null, 2)}
              </pre>
            </details>
          )}
        </div>
      </div>

      {/* Video Grid */}
      <div className="pt-12">
        <div className="grid grid-cols-2 container mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData &&
            videoData.map((item, index) => (
              <div
                key={index}
                onClick={() => setOpenModalIndex(index)}
                className="cursor-pointer w-full relative"
              >
                {/* Video Thumbnail */}
                <div className="relative w-full h-48 before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-50">
                  {thumbnails[index] ? (
                    <img
                      src={thumbnails[index]}
                      alt={item.key}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-700 rounded-lg flex items-center justify-center">
                      <span className="text-white text-sm">Loading...</span>
                    </div>
                  )}
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <IoIosPlayCircle size={54} className="text-white" />
                  </p>
                </div>

                {/* Video Title */}
                <h3 className="text-center mt-2 text-white text-sm">
                  {item.key
                    .replace(/_/g, " ")
                    .replace(/\.[^/.]+$/, "")
                    .replaceAll("x264", "")
                  }
                </h3>

                {/* Error indicator */}
                {videoErrors[`video_${index}`] && (
                  <div className="text-red-400 text-xs mt-1 text-center">
                    ⚠️ Video Error
                  </div>
                )}

                {/* Modal */}
                {openModalIndex === index && (
                  <section
                    className="modal__bg fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
                    onClick={() => setOpenModalIndex(null)}
                  >
                    <div className="modal__align">
                      <div
                        className="modal__content bg-gray-800 p-6 rounded-lg relative max-w-4xl w-full mx-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <IoCloseOutline
                          className="modal__close absolute z-[999] top-2 right-2 text-white text-3xl cursor-pointer hover:text-gray-300"
                          aria-label="Close modal"
                          onClick={() => setOpenModalIndex(null)}
                        />
                        <div className="modal__video-align flex flex-col items-center">
                          {videoLoading && (
                            <div className="modal__spinner">
                              <BiLoaderAlt
                                className="modal__spinner-style animate-spin text-white"
                                size={40}
                              />
                            </div>
                          )}
                          <video
                            className="modal__video-style w-full max-w-3xl"
                            onLoadStart={() => setVideoLoading(true)}
                            onLoadedData={() => setVideoLoading(false)}
                            onError={(e) => handleVideoError(e, index)}
                            preload="metadata"
                            src={item.url}
                            controls
                            autoPlay
                            title={item.key}
                          />
                          <h2 className="text-xl text-center py-5 px-4 text-white">
                            {item.key
                              .replace(/_/g, " ")
                              .replace(/\.[^/.]+$/, "")
                              .replaceAll("x264", "")
                            }
                          </h2>
                          
                          {/* Debug info for this video */}
                          <div className="text-xs text-gray-400 mt-2 text-center">
                            <p>URL: {item.url}</p>
                            {videoErrors[`playback_${index}`] && (
                              <p className="text-red-400">Error: {videoErrors[`playback_${index}`]}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                )}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default page;