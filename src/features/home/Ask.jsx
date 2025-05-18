import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Ask = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Question:", question);
  };

  return (
    <section className="relative w-full h-screen bg-[#F8F4EF] flex justify-center items-center overflow-hidden text-right">
      <video
        src="/dor.mp4"
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover brightness-50"
      />

      <div className="absolute inset-0 bg-black opacity-40" />

      <div className="relative z-10 flex flex-col md:flex-row-reverse text-center px-6 md:px-12 max-w-7xl mx-auto gap-8">
        {/* Left side: Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-lg p-6 w-full md:w-1/2"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            إذا كنت تحتاج إلى مساعدة، لا تتردد في السؤال
          </h3>

          <div className="flex flex-col gap-4 mb-4">
            <div className="flex-1">
              <label className="block text-right text-white font-semibold mb-2">
                الاسم
              </label>
              <input
                type="text"
                className="w-full p-2 border rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="اكتب اسمك"
              />
            </div>
            <div className="flex-1">
              <label className="block text-right text-white font-semibold mb-2">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                className="w-full p-2 border rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="اكتب بريدك الإلكتروني"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-right text-white font-semibold mb-2">
              السؤال
            </label>
            <textarea
              className="w-full p-2 border resize-none rounded"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
              placeholder="اكتب سؤالك هنا"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-secondary hover:bg-primary  text-white font-semibold py-2 px-4 rounded transition duration-300"
          >
            إرسال
          </button>
        </form>

        {/* Right side: Main content */}
        <div className="flex flex-col justify-center w-full md:w-1/2 text-white">
          <p
            className="text-lg sm:text-xl md:text-base leading-relaxed mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            نحن نقدم لك أفضل الحلول في صناعة الأبواب والنوافذ بأعلى معايير
            الجودة وابتكار يتماشى مع أحدث التقنيات.
          </p>

          <a
            href="/wpc"
            className="inline-block text-white bg-primary hover:bg-secondary hover:text-primary py-3 px-8 rounded-full text-xl font-semibold transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            اكتشف خدماتنا
          </a>
        </div>
      </div>
    </section>
  );
};

export default Ask;
