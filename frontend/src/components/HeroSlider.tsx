// src/components/HeroSlider.tsx
import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: '/tour-images/tour1.jpg',
    caption: 'Modern Training Infrastructure',
    link: '/nursing-course',
  },
  {
    src: '/tour-images/tour2.jpg',
    caption: 'Expert Trainers & Hands-On Practice',
    link: '/team',
  },
  {
    src: '/tour-images/tour3.jpg',
    caption: 'Visa Counseling & Career Guidance',
    link: '/visa',
  },
  {
    src: '/tour-images/tour4.jpg',
    caption: 'Europe Placement with Legal Work Visa',
    link: '/placement',
  },
  {
    src: '/tour-images/tour5.jpg',
    caption: 'Bright Global – A Gateway to Europe',
    link: '/contact',
  },
];

const HeroSlider = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  };

  return (
    <div className="w-full max-w-7xl mx-auto mb-8 rounded-lg overflow-hidden">
      <Slider {...settings}>
        {images.map((item, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer group"
            onClick={() => navigate(item.link)}
          >
            <img
              src={item.src}
              alt={`Slide ${idx + 1}`}
              className="w-full h-[400px] object-cover"
            />

            {/* Overlay with caption and button */}
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 transition-opacity duration-300 group-hover:bg-opacity-60">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{item.caption}</h3>
              <button
  onClick={(e) => {
    e.stopPropagation(); // Prevent parent click
    navigate('/apply');  // Navigate only to Apply
  }}
  className="self-start bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark"
>
  Apply Now →
</button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
