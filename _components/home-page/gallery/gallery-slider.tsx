"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";
import "swiper/css/pagination";
import classNames from "classnames";

interface Props {
  cssClasses?: string;
  data: string[];
}

const GallerySlider = ({ cssClasses, data }: Props) => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div
      className={classNames(
        "-mx-7 tablet:mx-0 overflow-x-clip relative",
        cssClasses,
      )}
    >
      <Swiper
        autoplay={{ delay: 5000 }}
        spaceBetween={40}
        slidesPerView={1}
        breakpoints={{
          800: { slidesPerView: 2 },
        }}
        speed={1000}
        modules={[Autoplay, Pagination]}
        pagination={{ dynamicBullets: true, clickable: true }}
        loop
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        style={
          {
            "--swiper-pagination-color": "#9C1A0D",
            "--swiper-pagination-bullet-inactive-color": "#9C1A0D",
            "--swiper-pagination-bullet-inactive-opacity": "0.8",
            "--swiper-pagination-bottom": "-20px",
          } as React.CSSProperties
        }
      >
        {data.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="aspect-square min-[600px]:aspect-[4/3.5]"
          >
            <Image
              src={slide}
              alt={`Bombay Bites - Gallery Image ${index + 1}`}
              className="object-cover"
              fill
              loading={index < 2 ? "eager" : "lazy"}
              sizes="(max-width: 800px) 100vw, 50vw"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="hidden desktop:block absolute top-1/2 left-10 -translate-y-1/2 z-10 bg-[rgba(255,255,255,0.75)] p-[6px] rounded-[4px] desktop:hover:cursor-pointer"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} color="#202020" />
      </button>

      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="hidden desktop:block absolute top-1/2 right-10 -translate-y-1/2 z-10 bg-[rgba(255,255,255,0.75)] p-[6px] rounded-[4px] desktop:hover:cursor-pointer"
        aria-label="Next slide"
      >
        <ChevronRight size={24} color="#202020" />
      </button>
    </div>
  );
};

export default GallerySlider;
