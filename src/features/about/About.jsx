import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS for scroll animations
  }, []);

  return (
    <section className="bg-[#F8F4EF] py-16 px-6 flex justify-center items-center">
      <div className="max-w-7xl mx-auto p-6 md:p-10 bg-white shadow-xl rounded-lg flex flex-col md:flex-row items-center gap-12">
        {/* Text Section */}
        <div
          className="md:w-1/2 text-right"
          data-aos="fade-up"
          data-aos-offset="200"
        >
          <h2 className="text-4xl font-bold text-primary mb-6">من نحن</h2>
          <p className="text-lg text-black leading-relaxed mb-6">
            دانة الرياض للابواب والنوافذ هي وكالة أعمال سعودية المنشأ متخصصة في
            مجال تصنيع الأبواب والنوافذ من خامات UPVC و WPC عالية الجودة. من
            أشهر كبريات الشركات الألمانية والأوركية الرائدة في هذا المجال.
          </p>
          <p className="text-lg text-black leading-relaxed mb-6">
            نعمل على توفير مستقبل صناعة الأبواب والنوافذ بالمملكة. لدى شركة دانة
            الرياض للنوافذ تقدم كل ما هو مبتكر ومتطور عالميًا في مجال الأبواب
            والنوافذ وذلك بفضل تجهيز مصنع سيدال للنوافذ بأحدث تكنولوجيا التصنيع
            العالمية، ويعد أول مصنع بالمملكة يعمل بشكل آلي شبه متكامل.
          </p>

          <h3
            className="text-2xl font-semibold text-primary mt-8 mb-4"
            data-aos="fade-up"
          >
            مهمتنا
          </h3>
          <p
            className="text-lg text-black leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            تهدف شركتنا إلى توفير حلول مبتكرة ومتميزة في عالم الأبواب والنوافذ،
            وذلك من خلال تصنيع منتجات عالية الجودة تتناسب مع جميع احتياجات
            عملائنا. نحن نسعى جاهدين لتحقيق التميز في كل منتج نقدمه، من خلال
            الحفاظ على معايير الجودة العالمية وتوفير الدعم الممتاز لعملائنا.
          </p>

          <h3
            className="text-2xl font-semibold text-primary mt-8 mb-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            رؤيتنا
          </h3>
          <p
            className="text-lg text-black leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            رؤيتنا هي أن نصبح روادًا في صناعة الأبواب والنوافذ في المملكة
            العربية السعودية ومنطقة الخليج، من خلال الابتكار المستمر
            والتكنولوجيا الحديثة التي تساهم في تطوير هذه الصناعة.
          </p>

          <h3
            className="text-2xl font-semibold text-primary mt-8 mb-4"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            قيمنا
          </h3>
          <ul
            className="list-disc pl-6 text-lg text-black leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <li>
              الابتكار: نحن نؤمن بأن الابتكار هو مفتاح النجاح في صناعة الأبواب
              والنوافذ.
            </li>
            <li>الجودة: نقدم منتجات عالية الجودة تلبي احتياجات عملائنا.</li>
            <li>
              الاستدامة: نحرص على تقديم حلول بيئية مستدامة في تصميم وتصنيع
              الأبواب والنوافذ.
            </li>
            <li>
              العملاء أولاً: نحن نضع عملائنا في قلب كل شيء نقوم به، ونسعى دائمًا
              لتلبية احتياجاتهم.
            </li>
          </ul>

          <h3
            className="text-2xl font-semibold text-primary mt-8 mb-4"
            data-aos="fade-up"
            data-aos-delay="1200"
          >
            خدماتنا
          </h3>
          <p
            className="text-lg text-black leading-relaxed mb-6"
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            نحن نقدم مجموعة متنوعة من الخدمات المتعلقة بالأبواب والنوافذ، بما في
            ذلك <strong>التصميم المخصص، التركيب، والخدمات ما بعد البيع</strong>.
            نلتزم بتوفير حلول مبتكرة لعملائنا مع ضمان أفضل جودة وأسعار تنافسية
            في السوق.
          </p>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2 relative">
          <div className="w-full h-full">
            <img
              src="/luxury1door.png"
              alt="باب مصنوع من مادة WPC"
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
