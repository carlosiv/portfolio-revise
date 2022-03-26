import React from "react";
import "./testimonials.css";
import myImg from "../../assets/images/small-img.jpg";
// import Swiper core and required modules
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        <Swiper
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <article className="testimonial">
              <div className="client__avatar">
                <img src={myImg} alt="client avatar" />
              </div>{" "}
              <h5 className="client__name">Carlos</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                temporibus facere nulla, voluptas at dignissimos ipsum laborum
                officia alias quidem a adipisci libero, numquam cupiditate iste
                reiciendis iure amet! Vitae.
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <article className="testimonial">
              <div className="client__avatar">
                <img src={myImg} alt="client avatar" />
              </div>{" "}
              <h5 className="client__name">Carlos</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                temporibus facere nulla, voluptas at dignissimos ipsum laborum
                officia alias quidem a adipisci libero, numquam cupiditate iste
                reiciendis iure amet! Vitae.
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <article className="testimonial">
              <div className="client__avatar">
                <img src={myImg} alt="client avatar" />
              </div>{" "}
              <h5 className="client__name">Carlos</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                temporibus facere nulla, voluptas at dignissimos ipsum laborum
                officia alias quidem a adipisci libero, numquam cupiditate iste
                reiciendis iure amet! Vitae.
              </small>
            </article>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <article className="testimonial">
              <div className="client__avatar">
                <img src={myImg} alt="client avatar" />
              </div>{" "}
              <h5 className="client__name">Carlos</h5>
              <small className="client__review">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
                temporibus facere nulla, voluptas at dignissimos ipsum laborum
                officia alias quidem a adipisci libero, numquam cupiditate iste
                reiciendis iure amet! Vitae.
              </small>
            </article>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
