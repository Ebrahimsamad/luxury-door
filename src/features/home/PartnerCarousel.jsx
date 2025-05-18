import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnerCarousel = () => {
  // List of logo images - replace these paths with your actual image paths
  const partnerLogos = [
    "/success/1.png",
    "/success/2.png",
    "/success/3.png",
    "/success/4.png",
    "/success/5.png",
    "/success/6.png",
    "/success/7.png",
    "/success/8.png",
    "/success/9.png",
    "/success/10.png",
    "/success/11.png",
  ];

  // Custom Next Arrow component
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute right-3 md:-right-1 top-1/2 transform -translate-y-1/2 text-primary cursor-pointer"
      onClick={onClick}
    >
      <FaArrowRight size={30} />
    </div>
  );

  // Custom Previous Arrow component
  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute left-6 md:-left-2 top-1/2 transform -translate-y-1/2 text-primary cursor-pointer"
      onClick={onClick}
    >
      <FaArrowLeft size={30} />
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
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
    <div className="py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-primary mb-8">شركاء النجاح</h2>
        <Slider {...settings} className="px-4">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="p-4">
              <div className="flex justify-center">
                <div className="w-[80%] h-40 flex justify-center items-center bg-white rounded-lg shadow-md">
                  <img
                    src={logo}
                    alt={`Partner ${index + 1}`}
                    className="object-contain h-full max-w-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default PartnerCarousel;
