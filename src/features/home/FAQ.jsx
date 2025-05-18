import React from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "ما هو WPC؟",
      answer:
        "هو مركب يجمع بين الخشب والبلاستيك، يوفر مقاومة ممتازة للرطوبة والعفن، ويُعد مثالياً للأبواب الداخلية.",
    },
    {
      question: "هل يمكن تخصيص تصميم الأبواب؟",
      answer: "نعم، نحن نوفر خيارات تخصيص لتناسب ذوق كل عميل.",
    },
    {
      question: "هل تقدمون خدمات التركيب؟",
      answer: "نعم، لدينا فريق متخصص في التركيب لضمان جودة المنتج حتى النهاية.",
    },
    {
      question: "ما هي مدة الضمان؟",
      answer:
        "نقدم ضماناً على أبوابنا يصل إلى 10 سنوات على جميع منتجاتنا لدعم ثقتك بنا.",
    },
  ];

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
      <h2 className="text-center text-2xl font-bold text-primary mb-6">
        الأسئلة الشائعة
      </h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="flex items-start  space-x-4 border-b border-gray-300 pb-4"
          >
            <div className="text-secondary ml-3 text-3xl font-bold">?</div>
            <div>
              <h3 className="text-lg font-semibold text-primary">
                {faq.question}
              </h3>
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
