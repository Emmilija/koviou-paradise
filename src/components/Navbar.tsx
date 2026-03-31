import React, { useState } from "react";
import Logo from '/villa-logo.svg'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-stone">

      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* ✅ SVG Logo (fastest possible) */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={Logo}
            alt="Villa Paradise Logo"
            width={48}
            height={48}
            className="object-contain"
            loading="eager"
              decoding="async"
          />
          <span className="hidden md:block font-heading font-bold text-xl text-primary">
            Villa Paradise
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-dark">
          <li onClick={() => handleScrollTo("about-us")} className="hover:text-primary cursor-pointer">
            About
          </li>
          <li onClick={() => handleScrollTo("gallery")} className="hover:text-primary cursor-pointer">
            Gallery
          </li>
          <li onClick={() => handleScrollTo("footer")} className="hover:text-primary cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Booking Button */}
        <div className="hidden md:block">
          <a
            href="https://grckainfo.com/en/accommodation/koviou-paradise-studios-apartments/3725/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-white rounded-xl font-semibold hover:bg-sunset hover:text-dark transition"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* ✅ SIMPLER Mobile Menu (no JS height calculation) */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone">
          <ul className="flex flex-col items-center space-y-6 py-6 text-dark font-medium">
            <li onClick={() => handleScrollTo("about-us")} className="cursor-pointer">
              About
            </li>
            <li onClick={() => handleScrollTo("gallery")} className="cursor-pointer">
              Gallery
            </li>
            <li onClick={() => handleScrollTo("footer")} className="cursor-pointer">
              Contact
            </li>
            <li>
              <a
                href="https://grckainfo.com/en/accommodation/koviou-paradise-studios-apartments/3725/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-sunset text-dark rounded-xl font-semibold"
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;