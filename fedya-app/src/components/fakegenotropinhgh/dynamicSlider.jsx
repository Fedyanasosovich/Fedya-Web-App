"use client";
import Image from "next/image";
// import React, { useEffect, useState } from "react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const DynamicSlider = () => {
  // function callingAfterAweekAutomatically(apiCall) {
  //   apiCall();

  //   // Set timeout for one week (604800 seconds)
  //   setTimeout(() => {
  //     callingAfterAweekAutomatically(apiCall); // Recursively call the function
  //   }, 604800 * 1000); // Convert seconds to milliseconds
  // }

  // async function fetchAllFileUrls(bucketName) {
  //   try {
  //     const response = await fetch("/api/getPresignedUrl", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ bucketName }),
  //     });

  //     const data = await response.json();

  //     return data.urls; // Array of objects with { key, url }
  //   } catch (error) {
  //     console.error("Error fetching file URLs:", error);
  //     return [];
  //   }
  // }

  // const [files, setFiles] = useState([]);

  // async function loadFiles() {
  //   const fileUrls = await fetchAllFileUrls("fakegenotropinhgh.com");
  //   setFiles(fileUrls);
  // }

  // useEffect(() => {
  //   callingAfterAweekAutomatically(loadFiles);
  // }, []);

  // const separateFiles = files.reduce(
  //   (acc, file) => {
  //     const extension = file.key.split(".").pop().toLowerCase();
  //     if (["jpg", "jpeg", "png", "webp"].includes(extension)) {
  //       acc.images.push(file);
  //     } else if (["mp4"].includes(extension)) {
  //       acc.videos.push(file);
  //     }
  //     return acc;
  //   },
  //   { images: [], videos: [] }
  // );

  // // You now have separate arrays for images and videos
  // const { images, videos } = separateFiles;

  const images = [
    {
      url: "/images/Genotropin contents.JPG",
    },
    {
      url: "/images/matching serial numbers.JPG",
    },
    {
      url: "/images/new pfizer logo.JPG",
    },
    {
      url: "/images/Yellow price tag.JPG",
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={3}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      navigation={true}
      className="mySwiper px-20"
      breakpoints={{
        300: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
      }}
    >
      {images &&
        images.map((items, i) => (
          <SwiperSlide key={i} className="px-14">
            <Image
              src={items.url}
              width={300}
              height={300}
              className="h-64 w-full object-cover rounded"
              // alt={items.key}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default DynamicSlider;
