import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg-primary py-8 flex flex-col md:flex-row items-center justify-center text-white text-center md:text-left">
      <h2 className="text-2xl md:text-3xl font-bold mx-4 mb-4 md:mb-0">
        كن مختلفاً واذهب بعيداً بخيالك
      </h2>
      <div className="flex flex-col md:flex-row gap-4">
        <Link
          to="/contact"
          className="px-4 py-2 border-2 border-white text-white hover:bg-secondary hover:text-black transition duration-300"
        >
          تواصل معنا
        </Link>
        <Link
          to="/design"
          className="px-4 py-2 bg-secondary text-white hover:bg-gray-500 transition duration-300"
        >
          صمم بابك
        </Link>
      </div>
    </div>
  );
};

export default Banner;
