'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Courses from "./Courses";

    

const CourseSlider = ({ allCourses }) => {
  return (
    <div className="w-full">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {allCourses.slice(0, 6).map(course => (
          <SwiperSlide key={course.id}>
            <Courses courses={course} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};


export default CourseSlider;