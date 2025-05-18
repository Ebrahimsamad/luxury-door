import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";

export default function ContactHeader() {
  return (
    <div className="bg-white py-4 px-6 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <img src="/lo.webp" alt="Luxury Door Logo" className="h-10" />
      </div>

      {/* Contact Info */}
      <div className="flex items-center space-x-6 space-x-reverse text-gray-700 text-sm">
        {/* Email */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <FaEnvelope className="text-gray-500" />
          <span>fakhamatbab@gmail.com</span>
        </div>

        {/* Phone Number */}
        <div className="flex items-center space-x-2 space-x-reverse">
          <FaPhoneAlt className="text-gray-500" />
          <span>+966 053 479 1100</span>
        </div>
      </div>
    </div>
  );
}
