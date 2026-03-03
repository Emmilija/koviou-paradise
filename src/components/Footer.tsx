// import React from "react";
// import logo from "../assets/logo/koviou.png";

// const Footer = () => {
//   return (
//     <footer id="footer" className="bg-light text-dark py-12 px-6">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
//         {/* Logo + Newsletter */}
//         <div>
//   <img
//     src={logo}
//     alt="Koviou Logo"
//     className="h-12 w-12 rounded-full mb-4 shadow-lg-soft"
//   />
//   <p className="mb-2 font-body text-dark">Book your vacation </p>
//   <div className="flex w-1/2 rounded-xl overflow-hidden shadow-lg-soft mt-2 max-w-sm">

//     {/* CTA Button */}
//         <a
//           href="https://grckainfo.com/en/accommodation/koviou-paradise-studios-apartments/3725/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="bg-primary w-full text-light text-center px-16 py-4 font-semibold hover:bg-secondary transition"
//         >
//           Book Now
//         </a>
//   </div>
// </div>
//         {/* Links */}
//         <div>
//           <h3 className="font-heading text-lg mb-4 text-primary">Links</h3>
//           <ul className="space-y-2 text-dark/70">
//             <li className="hover:text-primary cursor-pointer">Home</li>
//             <li className="hover:text-primary cursor-pointer">About Us</li>
//             <li className="hover:text-primary cursor-pointer">Our Villa</li>
//             <li className="hover:text-primary cursor-pointer">Gallery</li>
//             <li className="hover:text-primary cursor-pointer">Contact</li>
//           </ul>
//         </div>

//         {/* Our Villas */}
//         <div>
//           <h3 className="font-heading text-lg mb-4 text-primary">Our Villas</h3>
//           <ul className="space-y-2 text-dark/70">
//             <li className="hover:text-primary cursor-pointer">The Oasis Villa</li>
//             <li className="hover:text-primary cursor-pointer">Seaside Villa</li>
//             <li className="hover:text-primary cursor-pointer">Sunset Bliss Villa</li>
//             <li className="hover:text-primary cursor-pointer">The Palm Villa</li>
//             <li className="hover:text-primary cursor-pointer">Tropical Trees Villa</li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="font-heading text-lg mb-4 text-primary">Get in Touch</h3>
//           <p className="text-dark/70 mb-2">Business Office</p>
//           <p className="text-dark/70 mb-2">Akti Koviou 1, Sithonia 630 88, Greece</p>
//           <p className="text-dark/70 mb-2">+389 71222701</p>
//           <p className="text-dark/70">karatashevskaemilija@gmail.com</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from "react";
import logo from "../assets/logo/logo-villa.png";

const Footer: React.FC = () => {
  return (
    <footer id="footer" className="bg-footer text-white pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Logo + CTA */}
        <div>
          <img
            src={logo}
            alt="Villa Paradise Logo"
            className="h-14 w-14 rounded-full mb-6 shadow-lg-soft bg-white p-1"
          />

          <p className="mb-4 text-white/80 font-body">
            Experience authentic Greek coastal living in Akti Koviou.
          </p>

          <a
            href="https://grckainfo.com/en/accommodation/koviou-paradise-studios-apartments/3725/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sunset text-dark px-8 py-3 rounded-xl font-semibold hover:bg-bronze transition duration-300"
          >
            Book Your Stay
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="font-heading text-lg mb-6 text-sunset">
            Navigation
          </h3>
          <ul className="space-y-3 text-white/70">
            {["Home", "About Us", "Our Villa", "Gallery", "Contact"].map(
              (item) => (
                <li
                  key={item}
                  className="hover:text-white transition cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Villas */}
        <div>
          <h3 className="font-heading text-lg mb-6 text-sunset">
            Our Villas
          </h3>
          <ul className="space-y-3 text-white/70">
            {[
              "The Oasis Villa",
              "Seaside Villa",
              "Sunset Bliss Villa",
              "The Palm Villa",
              "Tropical Trees Villa",
            ].map((villa) => (
              <li
                key={villa}
                className="hover:text-white transition cursor-pointer"
              >
                {villa}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-heading text-lg mb-6 text-sunset">
            Contact
          </h3>
          <p className="text-white/70 mb-3">
            Akti Koviou 1, Sithonia 630 88, Greece
          </p>
          <p className="text-white/70 mb-3">
            +389 71222701
          </p>
          <p className="text-white/70">
            karatashevskaemilija@gmail.com
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/50 text-sm">
        © {new Date().getFullYear()} Villa Paradise – Akti Koviou. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;