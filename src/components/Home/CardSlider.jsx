import React from "react";
import avatar from "../../assets/images/avatar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Card from "./Card";
import SwiperNavButton from "../common/SwiperNavButton";

const CardSlider = () => {
  const [swiperInstance, setSwiperInstance] = React.useState(null);
  const cardData = [
    {
      id: 1,
      name: "Shawn .I",
      image: avatar,
      date: "October 23,2023",
      verified: true,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi hic, temporibus ad dignissimos earum explicabo odit ipsam doloribus corrupti nobis. Tempore suscipit nam, ",
    },
    {
      id: 1,
      name: "Shawn .I",
      image: avatar,
      date: "October 23,2023",
      verified: true,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi hic, temporibus ad dignissimos earum explicabo odit ipsam doloribus corrupti nobis. Tempore suscipit nam,",
    },
    {
      id: 1,
      name: "Shawn .I",
      image: avatar,
      date: "October 23,2023",
      verified: true,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi hic, temporibus ad dignissimos earum explicabo odit ipsam doloribus corrupti nobis. Tempore suscipit nam, ",
    },
    {
      id: 1,
      name: "Shawn .I",
      image: avatar,
      date: "October 23,2023",
      verified: true,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi hic, temporibus ad dignissimos earum explicabo odit ipsam doloribus corrupti nobis. Tempore suscipit nam, ",
    },
    {
      id: 1,
      name: "Shawn .I",
      image: avatar,
      date: "October 23,2023",
      verified: true,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi hic, temporibus ad dignissimos earum explicabo odit ipsam doloribus corrupti nobis. Tempore suscipit nam,?",
    },
    {
      id: 1,
      name: "Shawn .I",
      image: avatar,
      date: "October 23,2023",
      verified: true,
      review:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi hic, temporibus ad dignissimos earum explicabo odit ipsam doloribus corrupti nobis. Tempore suscipit nam,",
    },
  ];
  return (
    <div className=" mt-16 border-2 xl:px-16  px-10   border-red-500 relative  ">
      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={1}
        spaceBetween={10}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        navigation={false}
      >
        {cardData.map((card, index) => (
          <SwiperSlide key={index}>
            <Card value={card} />
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperNavButton swiper={swiperInstance} />
    </div>
  );
};

export default CardSlider;
