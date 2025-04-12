// components/buypfizergenotropinhgh/GallerySection.jsx
"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

export default function GallerySection({ images }) {
  return (
    <div className="py-6 lg:pt-48">
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
          images.map((item, i) => (
            <SwiperSlide key={i} className="px-14">
              <Image
                src={item.url}
                width={300}
                height={300}
                className="h-64 w-full object-cover rounded"
                alt={item.key}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
