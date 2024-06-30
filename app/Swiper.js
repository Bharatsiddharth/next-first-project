'use client';

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const MySwiper = () => {
  return (
    <div className="swiper mySwiper">
      <div className="drag-cursor">
        <span>Drag <br /> or Click</span>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <div className="swiper-slide images">
            <div data-color="#018BCF" className="image">
              <img className="zoomed" src="assets/images/puratos.webp" alt="" />
            </div>
            <div className="texts">
              <p>The Sourdough Library in an immersive 3D-experience</p>
              <h3>Puratos</h3>
              <span className="label">Web • 3D</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide images">
            <div data-color="#90BFD6" className="image">
              <img className="zoomed" src="assets/images/skyview buildings.webp" alt="" />
            </div>
            <div className="texts">
              <p>Highlighting urban redevelopment in virtual reality</p>
              <h3>Stad Sint-Niklaas</h3>
              <span className="label">Web • 360° photography • 360° video • 3D</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide images">
            <div data-color="#A374FF" className="image">
              <img className="zoomed" src="assets/images/cartoon home.webp" alt="" />
            </div>
            <div className="texts">
              <p>A purrfect immersive experience for the felines and friends of Opti Life</p>
              <h3>Versele Laga</h3>
              <span className="label">Web • 3D</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide images">
            <div data-color="#f4d446" className="image">
              <img className="zoomed" src="assets/images/basf.webp" alt="" />
            </div>
            <div className="texts">
              <p>Building chemistry with potential candidates via an interactive web documentary</p>
              <h3>BASF</h3>
              <span className="label">Web • 360° photography • 360° video</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide images">
            <div data-color="#17F1D1" className="image">
              <img className="zoomed" src="assets/images/parrot.webp" alt="" />
            </div>
            <div className="texts">
              <p>Spreading its virtual wings</p>
              <h3>Versele Laga</h3>
              <span className="label">Web • 3D</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide images">
            <div data-color="#6c59ea" className="image">
              <img className="zoomed" src="assets/images/Ford-Mustang-Mach-E.webp" alt="" />
            </div>
            <div className="texts">
              <p>Gearing up: Ford Mustang of the future in virtual reality</p>
              <h3>Ford</h3>
              <span className="label">Virtual reality • 360° video</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide images">
            <div data-color="#f4d446" className="image">
              <img className="zoomed" src="assets/images/iko-design-center.webp" alt="" />
            </div>
            <div className="texts">
              <p>Building brand loyalty through online design tool</p>
              <h3>IKO</h3>
              <span className="label">Web • 3D</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide images">
            <div data-color="#f4d446" className="image">
              <img className="zoomed" src="assets/images/mobile scan.webp" alt="" />
            </div>
            <div className="texts">
              <p>Turning an Open Day into a covid-safe virtual experience</p>
              <h3>Voka Open Bedrijvendag</h3>
              <span className="label">Web • 360° photography • 360° video</span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide images">
            <div data-color="#f4d446" className="image">
              <img className="zoomed" src="assets/images/map.webp" alt="" />
            </div>
            <div className="texts">
              <p>Seeing double: transforming Taxistop into Mpact through augmented reality on a bottle</p>
              <h3>Mpact</h3>
              <span className="label">Web • Augmented reality • 3D</span>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
