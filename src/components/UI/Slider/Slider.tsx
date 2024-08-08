import React, { useState } from "react";
import Slider, { Settings } from "react-slick";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import "./slider.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: image1,
    heading: "Embracing digital transformation that goes beyond products",
    text: "Our pillars of Technology Development, System Integration, and Process Engineering drive innovation, streamline operations, and ensure long-term success in a dynamic market.",
  },
  {
    image: image2,
    heading: "A tradition of continuous innovation",
    text: "Innovation is in our DNA. We don’t settle for the status quo. Our teams are constantly pushing boundaries to bring you the products that are ahead of the curve, setting new industry standards.",
  },
  {
    image: image3,
    heading: "Powering industries with greener nonwoven solutions",
    text: "From recycling around 51,69,630 Kg of plastic per year to empowering industries with recyclable, renewable, and reclaimable nonwoven materials, we are ahead of the curve.",
  },
];

const SliderComponent: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const settings: Settings = {
    centerMode: true,
    centerPadding: "20%",
    slidesToShow: 1,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (_oldIndex: number, newIndex: number) => setCurrentIndex(newIndex),
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "10%",
        },
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "5%",
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className="slider-wrapper mt-12 p-0">
      <p className="text-black my-16 text-5xl text-center">
        <span className="text-[#00aeef] font-bold">Next Era</span> of
        possibilities
      </p>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`slide ${
              currentIndex === index ? "active" : "inactive"
            }`}
          >
            <img src={slide.image} alt="" className="w-full" />
          </div>
        ))}
      </Slider>
      <div className="text-below-slider w-full flex flex-col items-center max-w-4xl p-3 justify-center mt-4 text-gray-800">
        <div className="slide-text">
          <p className="text-lg font-bold text-gray-900">
            {slides[currentIndex % slides.length].heading}
          </p>
          <p className="text-lg text-gray-900 mt-3">
            {slides[currentIndex % slides.length].text}
          </p>
        </div>
      </div>
      <button className="bg-[#5cd6ff] rounded-full px-5 py-3 text-black mt-5 hover:bg-[#10bdf7]">How do we innovate?</button>
    </div>
  );
};

interface CustomArrowProps {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const CustomNextArrow: React.FC<CustomArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      <span>Next</span>
    </div>
  );
};

const CustomPrevArrow: React.FC<CustomArrowProps> = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      <span>Prev</span>
    </div>
  );
};

export default SliderComponent;
