"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import Image from "next/image";

interface Props {
  cssClasses?: string;
  data: string[];
}

const HeroSlider = ({ cssClasses, data }: Props) => {
  return (
    <Swiper
      autoplay={{
        delay: 4000,
      }}
      spaceBetween={12}
      speed={1000}
      modules={[Autoplay, Pagination, EffectFade]}
      className={cssClasses}
      effect="fade"
      pagination={{
        dynamicBullets: true,
        clickable: true,
      }}
      loop
      focusableElements=""
    >
      {data.map((slide, index) => (
        <SwiperSlide key={index} className="relative">
          <Image
            src={slide}
            alt={`Slideshow - Image ${index + 1}`}
            className="object-cover"
            fill
            loading={index < 2 ? "eager" : "lazy"}
            sizes="(max-width: 1280px) 100vw, 900px"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
