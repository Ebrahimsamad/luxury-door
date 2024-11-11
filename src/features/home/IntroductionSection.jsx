import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Link } from "react-router-dom";

const IntroductionSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS for animations
  }, []);

  return (
    <section className="relative w-full py-24 bg-[#F8F4EF] text-center overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/log.png')] opacity-50" />

      <div className="relative z-10 flex justify-center items-center px-6 md:px-12 space-x-8 flex-row-reverse">
        <div className="flex-shrink-0 w-1/3 sm:w-1/4 lg:w-1/6">
          <img
            src="/door.svg"
            alt="Company Logo"
            className="mx-auto w-48 sm:w-60 lg:w-72"
            data-aos="fade-left"
            data-aos-delay="100"
          />
        </div>
        <div
          className="w-full sm:w-2/3 lg:w-2/3 text-right text-primary leading-relaxed max-w-3xl"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-secondary mb-8">
            مقدمة
          </h2>
          <p className="text-lg sm:text-xl md:text-xl mb-6">
            تتخصص شركة فخامة باب للابواب والنوافذ المحدودة في التصاميم العصرية
            وانتاج وتركيب مختلف الاعمال للابواب والنوافذ من قطاعات ال Wpc و
            Upvc.
          </p>
          <p className="text-lg sm:text-xl md:text-xl">
            وفي ظل الامكانيات الهندسية والتقنيات المختلفة الحديثة والعالية
            الجودة قد تمكنا بفضل الله ان ننافس المصانع الرائدة في مجال الابواب
            والنوافذ بتميزنا بالتصاميم الحصرية واستقطابنا لفريق عمل ذو خبرة
            كبيره وكفاءة عالية الذي اكسبتنا السمعة الناجحه.
          </p>
        </div>
      </div>

      {/* Call-to-Action Button */}
      <div className="mt-8 text-center">
        <Link
          to="/contact"
          className="inline-block text-white bg-primary hover:bg-secondary hover:text-primary py-3 px-8 rounded-full text-lg font-semibold shadow-lg transition duration-300 transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          تواصل معنا
        </Link>
      </div>
    </section>
  );
};

export default IntroductionSection;
