import { useEffect } from "react";
import Slider from "react-slick";
import { FaWater, FaBug, FaLeaf, FaRecycle } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

// Custom Arrow Components
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer text-primary text-2xl"
      onClick={onClick}
    >
      →
    </div>
  );
};

const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer text-primary text-2xl"
      onClick={onClick}
    >
      ←
    </div>
  );
};

const WPCInfo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Trigger animation once
    });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#F8F4EF] min-h-screen py-10 px-4 flex justify-center items-center">
      <div
        className="max-w-5xl w-full mx-auto p-4 md:p-8 bg-white shadow-lg rounded-lg"
        dir="rtl"
        data-aos="fade-up"
      >
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 text-center"
          data-aos="fade-down"
        >
          ما هي مادة WPC؟
        </h1>

        <p
          className="text-md sm:text-lg text-secondary mb-6 text-center leading-relaxed"
          data-aos="fade-up"
        >
          مادة WPC مصنوعة من مزيج من بودرة الخشب والبلاستيك، ويدعم تصنيعها بأحدث
          التقنيات العالمية. يتم ضغطها وتشكيلها في قوالب مخصصة لضمان جودة عالية
          ومتانة فائقة.
        </p>

        <div className="mb-8" data-aos="zoom-in">
          <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96">
            <img
              src="/wpc.jpg"
              alt="باب مصنوع من مادة WPC"
              className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-8">
          <div className="flex flex-col items-center" data-aos="flip-left">
            <FaWater className="text-primary text-3xl sm:text-4xl mb-2" />
            <p className="text-sm sm:text-lg font-semibold text-gray-800">
              ضد الماء
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="flip-left"
            data-aos-delay="100"
          >
            <FaBug className="text-primary text-3xl sm:text-4xl mb-2" />
            <p className="text-sm sm:text-lg font-semibold text-gray-800">
              ضد الحشرات
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <FaLeaf className="text-primary text-3xl sm:text-4xl mb-2" />
            <p className="text-sm sm:text-lg font-semibold text-gray-800">
              صديق للبيئة
            </p>
          </div>
          <div
            className="flex flex-col items-center"
            data-aos="flip-left"
            data-aos-delay="300"
          >
            <FaRecycle className="text-primary text-3xl sm:text-4xl mb-2" />
            <p className="text-sm sm:text-lg font-semibold text-gray-800">
              مصنع من مواد مستدامة
            </p>
          </div>
        </div>

        <div className="mb-8" data-aos="fade-up">
          <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
            لماذا تختار WPC؟
          </h2>
          <p className="text-sm sm:text-lg text-gray-700 leading-relaxed">
            إن مادة WPC تعتبر بديلاً ممتازاً للخشب التقليدي، فهي توفر المتانة
            المطلوبة مع مظهر أنيق، وتحتاج إلى صيانة أقل. كما أنها مقاومة للعوامل
            الجوية القاسية مما يجعلها خياراً مثالياً للاستخدام الداخلي والخارجي.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8">
          {[
            {
              img: "/single-door.png",
              title: "ابواب مفردة",
              description:
                "كل غرفة فريدة من نوعها، وطريقة دخولها يجب أن تكون كذلك.",
            },
            {
              img: "/single-door-plus.png",
              title: "ابواب مفردة بلاس",
              description:
                " مناسبة لجميع المساحات، مصممة لتوفير الشكل الجمالي والمتانة.",
            },
            {
              img: "/door-sahab.png",
              title: "ابواب سحاب",
              description:
                "مثالية للأماكن الضيقة حيث توفر مساحة إضافية وسهولة في الاستخدام.",
            },
            {
              img: "/double-door.png",
              title: "ابواب مزدوجة",
              description:
                "تضيف لمسة فاخرة وجمالية مميزة للمداخل والممرات الرئيسية.",
            },
            {
              img: "/entrance.png",
              title: "برواز للمداخل",
              description:
                "يقدم حلاً أنيقاً لمداخل المباني والمنازل بتصاميم عصرية.",
            },
          ].map((door, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 group"
              data-aos="fade-up"
              data-aos-delay={`${index * 100}`}
            >
              <div className="relative w-full h-40 sm:h-56 md:h-64 lg:h-80">
                <img
                  src={door.img}
                  alt={door.title}
                  className="w-full h-full object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="text-center">
                <h1 className="text-xl sm:text-2xl font-bold text-primary mb-2">
                  {door.title}
                </h1>
                <p className="text-sm sm:text-lg text-gray-800">
                  {door.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Section */}
        <div className="slider w-full mb-8" data-aos="fade-up">
          <Slider {...sliderSettings}>
            <div>
              <img src="1.png" alt="Image 1" className="mx-auto" />
            </div>
            <div>
              <img src="2.png" alt="Image 2" className="mx-auto" />
            </div>
            <div>
              <img src="3.png" alt="Image 3" className="mx-auto" />
            </div>
            <div>
              <img src="4.png" alt="Image 4" className="mx-auto" />
            </div>
          </Slider>
        </div>

        <div className="text-center flex flex-col md:flex-row gap-8 md:gap-12 mt-8">
          <div className="md:w-1/2" data-aos="fade-up">
            <FaRecycle className="text-primary text-4xl mb-2 mx-auto" />
            <p className="text-xl sm:text-2xl font-bold text-primary mb-4">
              مدة ضمان الابواب
            </p>
            <p className="text-sm sm:text-base text-gray-800">
              نحن نضمن الأبواب الداخلية المصنوعة من مادة WPC ضد أي ضرر قد يصيب
              الباب سواءاً من الرطوبة أو النمل الأبيض أو التمدد مع تغير درجات
              الحرارة أو مشاكل التركيب وذلك لمدة ١٠ أعوام من تاريخ التركيب
              والتسليم.
            </p>
          </div>
          <div className="md:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <FaWater className="text-primary text-4xl mb-2 mx-auto" />
            <p className="text-xl sm:text-2xl font-bold text-primary mb-4">
              المواد المقاومة للماء
            </p>
            <p className="text-sm sm:text-base text-gray-800">
              كل الأبواب يتم تصنيعها من مواد مقاومة للماء بنسبة 100%. توفر لك
              هذه الأبواب مقاومة ممتازة في البيئات الرطبة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WPCInfo;
