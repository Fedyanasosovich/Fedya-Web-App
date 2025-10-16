"use client";
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
  const [isFetching, setIsFetching] = useState(false);

  // Helper to clean video title (remove leading/trailing numbers, underscores, extension)
  const cleanTitle = (key) => {
    if (!key) return "";
    return key
      .replace(/_/g, " ")
      .replace(/\.[^/.]+$/, "") // remove file extension
      .replace(/^\s*\d+[\s._-]*/, "") // remove leading numbers like "1 " or "1-"
      .replace(/[\s._-]*\d+\s*$/, "") // remove trailing numbers like " 1" or "-1"
      .replaceAll("x264", "")
      .trim();
  };

  async function fetchAllFileUrls(bucketName) {
    try {
      setIsFetching(true);
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
      setIsFetching(false);
    } catch (error) {
      setIsFetching(false);
      console.error("Error fetching file URLs:", error);
    }
  }

  // Function to generate thumbnail from video
  const generateThumbnail = (videoUrl, index) => {
    try {
      console.debug(`generateThumbnail start index=${index} url=${videoUrl}`);
      const video = document.createElement("video");
      video.preload = "auto";
      video.muted = true;
      video.playsInline = true;
      video.crossOrigin = "anonymous"; // requires proper S3 CORS

      // Hide video off-screen so browser will still load / decode it
      video.style.position = "absolute";
      video.style.left = "-9999px";
      video.style.width = "1px";
      video.style.height = "1px";

      // start capture at ~2 seconds to avoid intro black frames
      let currentTime = 2; // preferred capture time in seconds
      const maxRetries = 5;
      let retries = 0;

      const cleanup = () => {
        try {
          video.pause();
          video.removeAttribute("src");
          video.load();
        } catch (e) {}
        try {
          if (video.parentNode) video.parentNode.removeChild(video);
        } catch (e) {}
      };

      const captureFrame = () => {
        try {
          console.debug(
            `captureFrame called index=${index} retries=${retries}`
          );
          const canvas = document.createElement("canvas");
          canvas.width = video.videoWidth || 320;
          canvas.height = video.videoHeight || 180;
          const ctx = canvas.getContext("2d");
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          // Try to read image data (may throw if canvas is tainted by CORS)
          const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
          const isBlackFrame = isBlack(imageData);

          if (!isBlackFrame || retries >= maxRetries) {
            // Use compressed JPEG to reduce size before storing in localStorage
            const thumbnailUrl = canvas.toDataURL("image/jpeg", 0.6);
            console.debug(`thumbnail generated index=${index}`);
            setThumbnails((prev) => ({ ...prev, [index]: thumbnailUrl }));
            cleanup();
          } else {
            retries++;
            const duration = video.duration || 0;
            // On retry, advance by 1s to locate a non-black frame sooner
            if (duration) {
              currentTime = Math.min(
                currentTime + 1,
                Math.max(0.5, duration - 0.1)
              );
            } else {
              currentTime += 1;
            }
            try {
              console.debug(`retrying seek index=${index} to ${currentTime}`);
              video.currentTime = currentTime;
            } catch (e) {
              // ignore
            }
          }
        } catch (err) {
          // Likely a CORS taint or draw error — abort
          console.warn(
            "Thumbnail capture failed (possible CORS or decode issue):",
            err
          );
          cleanup();
        }
      };

      const onLoadedData = () => {
        console.debug(`video loadeddata/canplay for index=${index}`);
        // Try to trigger decoding by attempting a muted play, then seek
        try {
          const p = video.play();
          if (p && typeof p.then === "function") {
            p.then(() => {
              video.pause();
              try {
                video.currentTime = currentTime;
              } catch (e) {}
            }).catch(() => {
              try {
                video.currentTime = currentTime;
              } catch (e) {}
            });
          } else {
            try {
              video.currentTime = currentTime;
            } catch (e) {}
          }
        } catch (e) {
          try {
            video.currentTime = currentTime;
          } catch (e) {}
        }
      };

      video.addEventListener("loadeddata", onLoadedData, { once: true });
      video.addEventListener("canplay", onLoadedData, { once: true });
      video.addEventListener("seeked", captureFrame);
      video.addEventListener("error", (e) => {
        console.error(`Failed to load video for thumbnail: ${videoUrl}`, e);
        cleanup();
      });

      // append to DOM to encourage loading/decoding
      try {
        document.body.appendChild(video);
      } catch (e) {}

      // assign src last to start load
      video.src = videoUrl;
      video.load();

      // No automatic timeout: keep trying until a frame is captured or an explicit error occurs.
    } catch (err) {
      console.error("generateThumbnail error:", err);
    }

    // Helper function to check if a frame is black
    const isBlack = (imageData) => {
      const { data } = imageData;
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
      // Use a snapshot of thumbnails to avoid stale closure
      const currentThumbs =
        JSON.parse(localStorage.getItem("thumbnails") || "{}") || {};
      videoData.forEach((item, index) => {
        if (!currentThumbs[index] && !thumbnails[index]) {
          console.debug(
            `No thumbnail cached for index=${index}, key=${item.key}, url=${item.url}`
          );
          // Generate thumbnail only if not already cached
          generateThumbnail(item.url, index);
        } else {
          console.debug(`Thumbnail exists for index=${index}`);
        }
      });
    }
  }, [videoData]);

  // Persist thumbnails to localStorage when they change
  useEffect(() => {
    const MAX_SAVED = 24; // limit number of thumbnails saved to avoid quota issues
    try {
      // Take numeric keys in ascending order and persist up to MAX_SAVED
      const keys = Object.keys(thumbnails)
        .map((k) => parseInt(k, 10))
        .filter((n) => !Number.isNaN(n))
        .sort((a, b) => a - b)
        .slice(0, MAX_SAVED);
      const toSave = {};
      keys.forEach((k) => {
        toSave[k] = thumbnails[k];
      });
      localStorage.setItem("thumbnails", JSON.stringify(toSave));
    } catch (err) {
      // If quota exceeded or other storage issues occur, drop persistence to avoid noisy errors.
      console.warn("Could not persist thumbnails (quota?):", err);
    }
  }, [thumbnails]);

  return (
    <>
      <Hero
        title={"Latest Videos"}
        text={`Here you will find the latest videos as they are uploaded. 🚀`}
      />
      <div className="pt-12 lg:pt-48">
        <div className="grid grid-cols-2 container mx-4 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Show skeletons while fetching */}
          {isFetching &&
            Array.from({ length: 6 }).map((_, i) => (
              <div key={`skeleton-${i}`} className="w-full">
                <div className="w-full h-48 bg-gray-700 rounded-lg overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-600 animate-pulse" />
                </div>
                <div className="mt-2 h-4 bg-gray-700 rounded w-3/4 mx-auto animate-pulse" />
              </div>
            ))}

          {/* Show message if fetch finished but no videos */}
          {!isFetching && fetchCall && videoData.length === 0 && (
            <div className="col-span-3 text-center text-gray-300 py-8">
              No videos found.
            </div>
          )}

          {/* Actual video items */}
          {!isFetching &&
            videoData &&
            videoData.map((item, index) => (
              <div
                key={index}
                onClick={() => setOpenModalIndex(index)} // Open modal on click
                className="cursor-pointer w-full relative"
              >
                {/* Video Thumbnail */}
                <div className="relative w-full h-48 before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-50">
                  <img
                    src="/images/download.jpeg"
                    alt={"video thumbnail"}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                    <IoIosPlayCircle size={54} className="text-white" />
                  </p>
                </div>

                {/* Video Title */}
                <h3 className="text-center mt-2 text-white text-sm">
                  {cleanTitle(item.key)}
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
                          className="modal__close absolute z-[999] top-2 right-2 text-black text-3xl cursor-pointer"
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
                            preload="true"
                            src={item.url}
                            controls
                            autoPlay="true"
                            title={item.key}
                          ></video>
                          <h2 className="text-xl text-center py-5 px-4 text-white">
                            {cleanTitle(item.key)}
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
