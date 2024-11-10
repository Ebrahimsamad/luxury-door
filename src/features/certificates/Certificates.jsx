import React, { useState } from "react";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certificates = () => {
  const certificateImages = [
    "/cer-1.jpg",
    "/cer-2.jpg",
    "/cer-3.jpg",
    "/cer-4.jpg",
    "/cer-5.jpg",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openOverlay = (src) => {
    setCurrentImage(src);
    setIsOpen(true);
  };

  const closeOverlay = () => {
    setIsOpen(false);
    setCurrentImage(null);
  };

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-primary cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowRight size={30} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary cursor-pointer z-10"
      onClick={onClick}
    >
      <FaArrowLeft size={30} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-100 py-10 min-h-screen flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-8">
          شهاداتنا المعتمدة
        </h1>
        <p className="text-lg text-center text-secondary mb-12">
          نفخر بتقديم شهاداتنا المعتمدة لضمان الجودة والثقة لعملائنا.
        </p>

        {/* Slider Component */}
        <Slider {...settings} className="px-2 md:px-6 lg:px-12">
          {certificateImages.map((src, index) => (
            <div
              key={index}
              className="relative group w-full h-full rounded-lg overflow-hidden shadow-lg transition transform hover:scale-105"
              onClick={() => openOverlay(src)}
            >
              <div className="w-full h-64 sm:h-80 md:h-96 flex justify-center items-center bg-gray-200">
                <img
                  src={src}
                  alt={`شهادة ${index + 1}`}
                  className="object-contain max-w-full max-h-full"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-2xl font-semibold">
                  شهادة {index + 1}
                </span>
              </div>
            </div>
          ))}
        </Slider>

        {/* Overlay Modal */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            onClick={closeOverlay}
          >
            <div
              className="relative max-w-2xl max-h-full p-4 bg-white rounded-lg shadow-lg"
              onClick={(e) => e.stopPropagation()}
            >
              <FaTimes
                className="absolute top-3 right-3 text-gray-800 text-3xl cursor-pointer hover:text-gray-500"
                onClick={closeOverlay}
              />
              <img
                src={currentImage}
                alt="Certificate"
                className="object-contain max-w-full max-h-screen rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Certificates;
