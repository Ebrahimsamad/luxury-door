import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import SecondaryButton from "../../ui/SecondaryButton";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-primary text-white">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <Link to="/" className="flex items-center">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* النص */}
            <div className="text-right">
              <h1 className="text-lg font-bold text-white leading-tight">
                دانة الرياض
              </h1>
              <h2 className="text-sm font-semibold text-white tracking-wide">
                DANA AL RIYADH
              </h2>
            </div>
          </div>
        </Link>

        {/* Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
          <NavLink
            to="/dashboard"
            className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            الصفحة الرئيسية
          </NavLink>
          <span />
          <NavLink
            to="/wpc"
            className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            ماهو WPC
          </NavLink>
          <NavLink
            to="/about"
            className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            من نحن
          </NavLink>
          {/* <NavLink
            to="/types"
            className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            أنواع الأبواب
          </NavLink> */}
          <NavLink
            to="/certificates"
            className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            الشهادات المعتمدة
          </NavLink>
          <NavLink
            to="/contact"
            className="px-3 py-2 rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            تواصل معنا
          </NavLink>
        </nav>

        {/* Burger Menu Icon (Mobile) */}
        <div className="lg:hidden">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="focus:outline-none text-white"
          >
            {isMobileMenuOpen ? (
              <FaTimes className="h-6 w-6" />
            ) : (
              <FaBars className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Button Section (Desktop) */}
        <div className="hidden lg:block">
          <Link
            to="/design"
            className="bg-secondary text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90"
          >
            صمم بابك
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="flex flex-col items-center space-y-2 lg:hidden text-sm font-semibold py-4">
          <NavLink
            to="/dashboard"
            onClick={closeMobileMenu}
            className="px-3 py-2 w-full text-center rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            الصفحة الرئيسية
          </NavLink>
          <NavLink
            to="/wpc"
            onClick={closeMobileMenu}
            className="px-3 py-2 w-full text-center rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            ماهو WPC
          </NavLink>
          <NavLink
            to="/about"
            onClick={closeMobileMenu}
            className="px-3 py-2 w-full text-center rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            من نحن
          </NavLink>
          {/* <NavLink
            to="/types"
            className="px-3 py-2 w-full text-center rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            أنواع الأبواب
          </NavLink> */}
          <NavLink
            to="/certificates"
            onClick={closeMobileMenu}
            className="px-3 py-2 w-full text-center rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            الشهادات المعتمدة
          </NavLink>
          <NavLink
            to="/contact"
            onClick={closeMobileMenu}
            className="px-3 py-2 w-full text-center rounded-md transition-all duration-200 hover:bg-secondary hover:text-primary"
          >
            تواصل معنا
          </NavLink>
          <Link
            to="/design"
            onClick={closeMobileMenu}
            className="bg-secondary text-white font-bold py-2 px-4 rounded-md hover:bg-opacity-90"
          >
            صمم بابك
          </Link>
        </nav>
      )}
    </header>
  );
}
