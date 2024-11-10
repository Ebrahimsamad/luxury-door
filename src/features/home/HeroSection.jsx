import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import { useTrail, animated } from "@react-spring/web";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const text = "فخامة باب";
  const letters = text.split("");

  const trail = useTrail(letters.length, {
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 50 },
    config: { mass: 1, tension: 280, friction: 60 },
    delay: 500,
  });

  return (
    <section className="relative w-full h-screen bg-[#F8F4EF] flex justify-center items-center overflow-hidden">
      <video
        src="/bg.mp4"
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover brightness-50"
      />

      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="relative z-10 text-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="mb-6 ">
          {trail.map((style, index) => (
            <animated.span
              key={index}
              style={style}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-secondary"
            >
              {letters[index]}
            </animated.span>
          ))}
        </div>

        <p
          className="text-lg sm:text-xl md:text-base text-white leading-relaxed mb-8 md:max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          نحن نقدم لك أفضل الحلول في صناعة الأبواب والنوافذ بأعلى معايير الجودة
          وابتكار يتماشى مع أحدث التقنيات.
        </p>

        <Link
          to="/wpc"
          className="inline-block text-white bg-primary hover:bg-secondary hover:text-primary py-3 px-8 rounded-full text-xl font-semibold transition duration-300 transform hover:scale-105"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          اكتشف خدماتنا
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;