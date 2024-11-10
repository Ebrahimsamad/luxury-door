import { Link } from "react-router-dom";

const WPCMaterialComponent = () => {
  return (
    <div
      dir="ltr"
      className="flex items-center justify-center bg-gray-50 p-8 md:flex-row flex-col-reverse"
    >
      {/* Left Section with Text and Button */}
      <div className="text-right md:w-1/2 p-4">
        <h2 className="text-4xl font-bold text-primary mb-4">ماهي مادة WPC</h2>
        <p className="text-black mb-6 leading-relaxed">
          مصنع من خليط من برادة الخشب مادة المدعم بحبيبات من البلاستيك بأحدث
          التقنيات العالمية تتحمل على درجة حرارة عالية ويتم بتهيئها في قوالب
          وتجميعها وفقا للمقاسات المطلوبة.
        </p>
        <Link
          to="/wpc"
          className="w-full bg-secondary hover:bg-primary  text-white font-semibold py-2 px-4 rounded transition duration-300"
        >
          اكتشف المزيد
        </Link>
      </div>

      {/* Right Section with Door Image */}
      <div className="md:w-1/2 flex justify-center">
        <img
          src="/single-door.jpg"
          alt="WPC Door"
          className="max-w-xs md:max-w-md object-contain"
        />
      </div>
    </div>
  );
};

export default WPCMaterialComponent;
