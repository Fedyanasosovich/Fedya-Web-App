"use client";
// Create a separate file for this component: components/fedyanasosovich/ClientDynamicSlider.jsx
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

export default function ClientDynamicSlider(props) {
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // Your GSAP animations here
    // For example:
    gsap.from(".slide-item", {
      opacity: 0,
      y: 50,
      stagger: 0.1,
      duration: 1,
      scrollTrigger: {
        trigger: ".slider-container",
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse",
      }
    });
    
    return () => {
      // Clean up ScrollTrigger
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  // Implement the rest of your DynamicSlider functionality here
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {/* Your SwiperSlides would go here */}
        {[1, 2, 3].map((item, index) => (
          <SwiperSlide key={index} className="slide-item">
            <div className="slide-content">
              {/* Sample content */}
              <h3>Slide {item}</h3>
              <p>This is slide content {item}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// Create a separate file for this component: components/fedyanasosovich/VideoPlayer.jsx
"use client";
import { useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import { BiLoaderAlt } from "react-icons/bi";

export default function VideoPlayer() {
  const [showVideo, setShowVideo] = useState(false);
  const [loading, setLoading] = useState(true);

  const openVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  };

  const handleVideoLoad = () => {
    setLoading(false);
  };

  return (
    <div className="relative">
      {!showVideo ? (
        <div 
          className="video-thumbnail relative cursor-pointer"
          onClick={openVideo}
        >
          <div className="aspect-video w-full max-w-3xl bg-gray-800 rounded-lg flex items-center justify-center">
            <IoIosPlayCircle size={60} className="text-white" />
          </div>
        </div>
      ) : (
        <div className="video-modal fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
          <button 
            className="absolute top-4 right-4 text-white z-10" 
            onClick={closeVideo}
          >
            <IoCloseOutline size={40} />
          </button>
          
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center">
              <BiLoaderAlt size={40} className="text-white animate-spin" />
            </div>
          )}
          
          <iframe
            className="w-full max-w-4xl aspect-video"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Fedya Nasosovich Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleVideoLoad}
          ></iframe>
        </div>
      )}
    </div>
  );
}