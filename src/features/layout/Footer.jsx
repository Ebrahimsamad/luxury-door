import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SiTiktok } from "react-icons/si";
import { IoLogoYoutube } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-10 px-6 md:px-10 lg:px-16 rtl">
      <div className="container mx-auto flex flex-col md:flex-row lg:flex-row lg:justify-between gap-12 lg:gap-16 text-left">
        {/* Logo and Contact Info */}
        <div className="order-1 lg:order-none flex flex-col items-center lg:items-start mb-8 lg:mb-0">
          <img
            src="/logoo.png"
            alt="Luxury Door Logo"
            className="h-16 mb-6 lg:h-20"
          />
          <div className="space-y-4 text-white text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-reverse">
              <FaPhone className="text-secondary text-lg lg:text-xl" />
              <span className="text-sm lg:text-base">+966510727255</span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-reverse">
              <FaEnvelope className="text-secondary text-lg lg:text-xl" />
              <span className="text-sm lg:text-base">
                fakhamatbab@gmail.com
              </span>
            </div>
            <div className="flex items-center justify-center lg:justify-start space-x-3 lg:space-x-reverse">
              <FaMapMarkerAlt className="text-secondary text-lg lg:text-xl" />
              <span className="text-sm lg:text-base">
                الرياض - المملكة العربية السعودية
              </span>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 lg:space-x-reverse mt-6">
            <Link
              to="https://www.tiktok.com"
              aria-label="TikTok"
              className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary text-2xl"
            >
              <SiTiktok />
            </Link>
            <Link
              to="https://www.instagram.com"
              aria-label="Instagram"
              className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary text-2xl"
            >
              <FiInstagram />
            </Link>
            <Link
              to="https://www.youtube.com"
              aria-label="YouTube"
              className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary text-2xl"
            >
              <IoLogoYoutube />
            </Link>
          </div>
        </div>

        {/* Projects Section */}
        <div className="order-2 lg:order-none text-center lg:text-left">
          <h3 className="text-xl font-semibold mb-4 lg:text-2xl text-right">
            مشاريعنا
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="#"
                className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary flex items-center justify-center lg:justify-start text-white"
              >
                كتالوج
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary flex items-center justify-center lg:justify-start text-white"
              >
                الشهادات المعتمدة
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary flex items-center justify-center lg:justify-start text-white"
              >
                ماهو WPC
              </Link>
            </li>
          </ul>
        </div>

        {/* Useful Links Section */}
        <div className="order-3 lg:order-none text-center lg:text-left">
          <h3 className="text-xl font-semibold text-center mb-4 lg:text-2xl text-right">
            روابط مفيدة
          </h3>
          <ul className="space-y-3">
            <li>
              <Link
                to="#"
                className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary flex items-center justify-center lg:justify-start text-white"
              >
                معلومات عنا
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary flex items-center justify-center lg:justify-start text-white"
              >
                أنواع الأبواب
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary flex items-center justify-center lg:justify-start text-white"
              >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto text-center mt-10 border-t border-secondary pt-6">
        <p className="text-sm lg:text-base text-center">
          &copy; 2024 All Rights Reserved
          <span className="text-secondary cursor-pointer"> FakhamatBab</span>
        </p>
      </div>
    </footer>
  );
}
