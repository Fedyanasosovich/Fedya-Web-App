'use client';

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

// This component must be used with 'use client' directive since Swiper uses browser APIs
export default function ClientSideSwiper({ images }) {
  return (
    <div className="flex gap-3">
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
          768: { slidesPerView: images.length > 2 ? 3 : 2 },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="px-14 md:!w-[412px]">
            <div className="w-full">
              {image.caption && (
                <figcaption className="font-taviraj">{image.caption}</figcaption>
              )}
              <Image
                src={image.src}
                width={900}
                height={900}
                alt={image.alt || "Image"}
                className={`w-full object-cover ${image.className || ""}`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}