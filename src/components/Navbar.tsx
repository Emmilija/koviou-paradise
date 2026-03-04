import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo/logo-villa.webp";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState<string>("0px");

  useEffect(() => {
    if (menuRef.current) {
      setMenuHeight(`${menuRef.current.scrollHeight}px`);
    }
  }, [isOpen]);

  const handleScrollTo = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm fixed w-full z-50 border-b border-stone">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-6">

        {/* Logo */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={logo}
            width={48}
            height={48}
            alt="Villa Paradise Logo"
            className="rounded-full object-cover shadow-lg-soft"
          />
          <span className="hidden md:block font-heading text-xl text-primary">
            Villa Paradise
          </span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 font-medium text-dark">
          <li
            className="hover:text-primary transition cursor-pointer"
            onClick={() => handleScrollTo("about-us")}
          >
            About
          </li>
          <li
            className="hover:text-primary transition cursor-pointer"
            onClick={() => handleScrollTo("gallery")}
          >
            Gallery
          </li>
          <li
            className="hover:text-primary transition cursor-pointer"
            onClick={() => handleScrollTo("footer")}
          >
            Contact
          </li>
        </ul>

        {/* Booking Button */}
        <div className="hidden md:block">
          <a
            href="https://grckainfo.com/en/accommodation/koviou-paradise-studios-apartments/3725/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-primary text-white rounded-xl font-semibold hover:bg-sunset hover:text-dark transition duration-300"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{ maxHeight: isOpen ? menuHeight : "0px" }}
        className="md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-stone"
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-dark font-medium">
          <li onClick={() => handleScrollTo("about-us")} className="hover:text-primary transition cursor-pointer">
            About
          </li>
          <li onClick={() => handleScrollTo("gallery")} className="hover:text-primary transition cursor-pointer">
            Gallery
          </li>
          <li onClick={() => handleScrollTo("footer")} className="hover:text-primary transition cursor-pointer">
            Contact
          </li>

          <a
            href="https://grckainfo.com/en/accommodation/koviou-paradise-studios-apartments/3725/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 px-6 py-2 bg-sunset text-dark rounded-xl font-semibold hover:bg-bronze transition"
          >
            Book Now
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;