import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const GalleryCarousel = () => {
  const images = [
    "/wpc/1.jpg",
    "/wpc/2.jpg",
    "/wpc/3.jpg",
    "/wpc/4.jpg",
    "/wpc/5.jpg",
    "/wpc/6.jpg",
    "/wpc/7.jpg",
    "/wpc/8.png",
  ];

  return (
    <div className="bg- min-h-[60vh] py-10 px-4">
      <h2 className="text-center text-primary text-3xl font-bold mb-8">
        أعمالنا
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Set autoplay
        modules={[Navigation, Autoplay]} // Add Autoplay module here
        breakpoints={{
          480: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="overflow-hidden rounded-lg shadow-md w-full max-w-xs">
              <img
                src={image}
                alt={`Work ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default GalleryCarousel;
