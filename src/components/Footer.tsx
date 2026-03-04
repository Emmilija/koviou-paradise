
import logo from "../assets/logo/logo-villa.webp";

const Footer: React.FC = () => {
   const handleScrollTo = (id: string): void => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
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
            <li
              onClick={() => handleScrollTo("home")}
              className="hover:text-white transition cursor-pointer"
            >
              Home
            </li>
            <li
              onClick={() => handleScrollTo("about-us")}
              className="hover:text-white transition cursor-pointer"
            >
              About Us
            </li>
            <li
              onClick={() => handleScrollTo("villa")}
              className="hover:text-white transition cursor-pointer"
            >
              Our Villa
            </li>
            <li
              onClick={() => handleScrollTo("gallery")}
              className="hover:text-white transition cursor-pointer"
            >
              Gallery
            </li>
            <li
              onClick={() => handleScrollTo("footer")}
              className="hover:text-white transition cursor-pointer"
            >
              Contact
            </li>
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
            +306981097289
          </p>
          <p className="text-white/70">
            paradisenikiti@gmail.com
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