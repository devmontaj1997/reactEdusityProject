import Container from "../Container/Container";
import SectionTitle from "../sectionTitle/SectionTitle";

import "./Testimonials.css";
import SlideCard from "../SlideCard/SlideCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { sliderData } from "../SlideCard/slideData";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
const Testimonials = () => {
  return (
    <>

    <div className="testimonials">
    <Container >
        <SectionTitle subHeading="TESTIMONIALS" heading="What Student Says" />

        <Swiper
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            240: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
          }}
          navigation={true}
          modules={[Navigation, Pagination]}
          className="mySwiper"
        >
          {sliderData?.length > 0
            ? sliderData.map((data) => {
                return (
                  <SwiperSlide key={data.id}>
                    <SlideCard data={data} />
                  </SwiperSlide>
                );
              })
            : "no data found"}
        </Swiper>
      </Container>

    </div>
     
    </>
  );
};

export default Testimonials;
