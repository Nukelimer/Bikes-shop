"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Bike from "./Bike";

function PopularBikeCarousel({ productsData }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="popular-bike-slider mb-8">
      {productsData.map((bikes) => {
        return (
          <SwiperSlide key={bikes._id}  >
                <Bike bikesData={bikes}  />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}



export default PopularBikeCarousel;
