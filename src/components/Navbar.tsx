// import React, { useState, useRef, useEffect } from "react";
// import logo from '../assets/logo/logo-villa.png';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const menuRef = useRef<HTMLDivElement>(null);
//   const [menuHeight, setMenuHeight] = useState("0px");

//   // Measure height dynamically for smooth slide
//   useEffect(() => {
//     if (menuRef.current) {
//       setMenuHeight(`${menuRef.current.scrollHeight}px`);
//     }
//   }, [menuRef, isOpen]);

//   // Helper function to scroll and close menu
//   const handleScrollTo = (id: string) => {
//     const el = document.getElementById(id);
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//       setIsOpen(false); // close mobile menu
//     }
//   };

//   return (
//     <nav className="bg-light shadow-md fixed w-full z-50">
//       <div className="container mx-auto flex justify-between items-center py-4 px-6">
//         {/* Logo */}
//         <div className="text-2xl font-bold">
//           <img
//             src={logo}
//             alt="logo"
//             className="h-12 w-12 rounded-full object-cover"
//           />
//         </div>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-8 text-gray-700">
//           <li
//             className="hover:text-green-600 cursor-pointer"
//             onClick={() => handleScrollTo("about-us")}
//           >
//             About Us
//           </li>
//           <li className="hover:text-green-600 cursor-pointer">Our Villa</li>
//           <li
//             className="hover:text-green-600 cursor-pointer"
//             onClick={() => handleScrollTo("gallery")}
//           >
//             Gallery
//           </li>
//           <li className="hover:text-green-600 cursor-pointer" onClick={() => handleScrollTo("footer")}>Contact</li>
//         </ul>

//         <div>
//                  {/* CTA Button */}
//         <a
//           href="https://grckainfo.com/en/accommodation/koviou-paradise-studios-apartments/3725/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="mt-6 px-8 py-3 bg-primary hover:bg-secondary text-white font-semibold rounded text-lg transition-colors duration-300"
         
//         >
//           Booking
//         </a>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           {isOpen ? "✕" : "☰"}
//         </button>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       <div
//         style={{ maxHeight: isOpen ? menuHeight : "0px" }}
//         className="md:hidden overflow-hidden transition-all duration-300 bg-white shadow-md"
//         ref={menuRef}
//       >
//         <ul className="flex flex-col items-center space-y-4 py-4">
//           <li
//             className="text-lg hover:text-green-600 cursor-pointer"
//             onClick={() => handleScrollTo("home")}
//           >
//             Home
//           </li>
//           <li
//             className="text-lg hover:text-green-600 cursor-pointer"
//             onClick={() => handleScrollTo("about-us")}
//           >
//             About Us
//           </li>
//           <li
//             className="text-lg hover:text-green-600 cursor-pointer"
//             onClick={() => handleScrollTo("gallery")}
//           >
//             Gallery
//           </li>
//           <li
//             className="text-lg hover:text-green-600 cursor-pointer"
//             onClick={() => handleScrollTo("contact")}
//           >
//             Contact
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState, useRef, useEffect } from "react";
import logo from "../assets/logo/logo-villa.png";

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
            alt="Villa Paradise Logo"
            className="h-12 w-12 rounded-full object-cover shadow-lg-soft"
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