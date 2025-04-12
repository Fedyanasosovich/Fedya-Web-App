// components/buypfizergenotropinhgh/VideoGrid.jsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";
import { IoIosPlayCircle } from "react-icons/io";

export default function VideoGrid({ gridItems }) {
  const [openModalIndex, setOpenModalIndex] = useState(null);
  const [videoLoading, setVideoLoading] = useState(true);

  const openModal = (index) => {
    // Toggle modal visibility: If the same modal is clicked again, close it.
    setOpenModalIndex(openModalIndex === index ? null : index);
  };

  const spinner = () => {
    setVideoLoading(!videoLoading);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 mt-10 gap-8">
      {gridItems.map((item, index) => (
        <div
          key={index}
          onClick={() => openModal(index)}
          className="cursor-pointer w-full"
        >
          <div className="relative w-full before:absolute before:left-0 before:right-0 before:top-0 before:z-10 before:h-full h-full z-10 before:w-full before:bg-black before:opacity-50">
            <Image
              src={item.imageSrc}
              className="w-full max-w-[1500px] h-full max-h-full lg:max-h-[400px] object-cover rounded-lg"
              width={1500}
              height={200}
              alt={item.title}
            />
            <p className="absolute top-1/2 z-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <IoIosPlayCircle size={54} />
            </p>
          </div>

          {/* Conditionally render the modal if it matches the openModalIndex */}
          {openModalIndex === index && (
            <section className="modal__bg">
              <div className="modal__align">
                <div className="modal__content">
                  <IoCloseOutline
                    className="modal__close"
                    aria-label="Close modal"
                    onClick={() => setOpenModalIndex(null)}
                  />
                  <div className="modal__video-align flex-col items-center">
                    {videoLoading ? (
                      <div className="modal__spinner">
                        <BiLoaderAlt
                          className="modal__spinner-style"
                          fadeIn="none"
                        />
                      </div>
                    ) : null}
                    <video
                      className="modal__video-style"
                      onLoad={spinner}
                      loading="lazy"
                      width="800"
                      height="500"
                      src={item.videoSrc}
                      controls
                      autoPlay
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></video>
                    <h2 className="text-2xl text-center md:text-3xl text-white bottom-0 z-30 p-2 font-taviraj py-5">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>
      ))}
    </div>
  );
}
