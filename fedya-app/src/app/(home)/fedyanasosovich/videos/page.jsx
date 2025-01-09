"use client"
import React, { useEffect, useState } from "react";
import { BiLoaderAlt } from "react-icons/bi";
import { IoIosPlayCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import Hero from "@/components/fedyanasosovich/hero";

const page = () => {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [videoData, setVideoData] = useState([]);
  const [thumbnails, setThumbnails] = useState({});
  const [fetchCall, setFetchCall] = useState(false);
  const [videoLoading, setVideoLoading] = useState(false);

  async function fetchAllFileUrls(bucketName) {
    try {
      const response = await fetch("/api/getPresignedUrl", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bucketName }),
      });

      const data = await response.json();
      setFetchCall(true);
      setVideoData(data.urls); // Assuming the API returns an array of video objects
    } catch (error) {
      console.error("Error fetching file URLs:", error);
    }
  }

  // Function to generate thumbnail from video
  const generateThumbnail = (videoUrl, index) => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.crossOrigin = "anonymous"; // Handle cross-origin issues if necessary
    let currentTime = 1; // Start at 1 second
    const maxRetries = 5; // Maximum number of retries
    let retries = 0;
  
    const captureFrame = () => {
      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      
      // Check if the frame is black
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const isBlackFrame = isBlack(imageData);
  
      if (!isBlackFrame || retries >= maxRetries) {
        // If the frame is not black OR max retries reached, save the thumbnail
        const thumbnailUrl = canvas.toDataURL("image/png");
        setThumbnails((prev) => ({ ...prev, [index]: thumbnailUrl }));
      } else {
        // If the frame is black, retry with a later timestamp
        retries++;
        currentTime += 2; // Increase the time by 2 seconds
        video.currentTime = currentTime;
      }
    };
  
    video.onloadeddata = () => {
      video.onseeked = captureFrame;
      video.currentTime = currentTime;
    };
  
    video.onerror = () => {
      console.error(`Failed to load video: ${videoUrl}`);
    };
  
    // Helper function to check if a frame is black
    const isBlack = (imageData) => {
      const { data } = imageData;
      // Check the first few pixels for blackness
      for (let i = 0; i < data.length; i += 4) {
        if (data[i] !== 0 || data[i + 1] !== 0 || data[i + 2] !== 0) {
          return false; // Found a non-black pixel
        }
      }
      return true;
    };
  };
  

  useEffect(() => {
    if (!fetchCall) {
      fetchAllFileUrls("fedyanasosovich.com");
    }
  }, [fetchCall]);

  useEffect(() => {
    // Load cached thumbnails from localStorage if available
    const cachedThumbnails = localStorage.getItem("thumbnails");
    if (cachedThumbnails) {
      setThumbnails(JSON.parse(cachedThumbnails));
    }

    if (videoData.length > 0) {
      videoData.forEach((item, index) => {
        if (!thumbnails[index]) {
          // Generate thumbnail only if not already cached
          generateThumbnail(item.url, index);
        }
      });
    }
  }, [videoData]);

  return (
    <>
      <Hero
        title={"Free Video Courses"}
        text={`To celebrate the launch of the new website and thank my dedicated fans I
        have decided to unlock all the previously paid content for free. Enjoy! 🚀`}
      />
      <div className="pt-12 lg:pt-48">
        <div className="grid grid-cols-2 container mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videoData &&
            videoData.map((item, index) => (
              <div
                key={index}
                onClick={() => setOpenModalIndex(index)} // Open modal on click
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
                    <img
                      src="/images/default-thumbnail.png"
                      alt={item.key}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <IoIosPlayCircle size={54} className="text-white" />
                  </p>
                </div>

                {/* Video Title */}
                <h3 className="text-center mt-2 text-white text-sm">
                  {item.key.replace(/_/g, " ").replace(/\.[^/.]+$/, "")}
                </h3>

                {/* Modal */}
                {openModalIndex === index && (
                  <section
                    className="modal__bg fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center"
                    onClick={() => setOpenModalIndex(null)} // Close modal on background click
                  >
                    <div className="modal__align">
                      <div
                        className="modal__content bg-gray-800 p-6 rounded-lg relative"
                        onClick={(e) => e.stopPropagation()} // Prevent click propagation
                      >
                        <IoCloseOutline
                          className="modal__close absolute top-2 right-2 text-white text-3xl cursor-pointer"
                          aria-label="Close modal"
                          onClick={() => setOpenModalIndex(null)} // Close modal on close button click
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
                            onLoadedData={() => setVideoLoading(false)}
                            loading="lazy"
                            src={item.url}
                            controls
                            autoPlay
                            title={item.key}
                          ></video>
                          <h2 className="text-xl text-center mt-4 text-white">
                            {item.key
                              .replace(/_/g, " ")
                              .replace(/\.[^/.]+$/, "")}
                          </h2>
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
