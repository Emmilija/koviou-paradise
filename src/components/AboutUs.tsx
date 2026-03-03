// import React from "react";
// import aboutImage from "../assets/images/villa4.webp";

// const AboutUs = () => {
//   return (
//     <section id="about-us" className="py-12 px-4 bg-white">
//       <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-8">
//         {/* Text */}
//         <div className="lg:w-1/2">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-dark mb-4">
//             About Us
//           </h2>
//           <p className="text-dark/80 mb-4">
//             At Koviou Villas, we specialize in crafting luxurious villas with modern design, elegant interiors, and unparalleled comfort. Each property is built with the finest materials and attention to detail, ensuring an exceptional living experience.
//           </p>
//           <p className="text-dark/80">
//             Our team is passionate about delivering dream homes tailored to your lifestyle. From conception to completion, we ensure quality, style, and satisfaction in every project.
//           </p>
//         </div>

//         {/* Image */}
//         <div className="lg:w-1/2">
//           <img
//             src={aboutImage}
//             alt="About Koviou Villas"
//             className="w-full rounded-xl shadow-lg-soft object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutUs;
import React from "react";
import aboutImage from "../assets/images/villa4.webp";

const AboutUs: React.FC = () => {
  return (
    <section
      id="about-us"
      className="py-20 px-6 bg-light"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Image First on Desktop */}
        <div className="relative group">
          <img
            src={aboutImage}
            alt="Villa Paradise - Akti Koviou"
            className="w-full h-[450px] object-cover rounded-2xl shadow-lg-soft"
          />

          {/* Decorative Accent */}
          <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sunset rounded-2xl opacity-80 hidden lg:block"></div>
        </div>

        {/* Text */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-dark mb-6">
            Discover Coastal Serenity
          </h2>

          <div className="w-16 h-1 bg-sunset mb-6 rounded-full"></div>

          <p className="text-dark/80 text-lg leading-relaxed mb-6">
            Nestled along the crystal-clear waters of Akti Koviou, Villa Paradise
            offers a refined escape where modern comfort meets Mediterranean charm.
            Wake up to the sound of the sea, unwind beneath golden sunsets,
            and experience authentic Greek hospitality.
          </p>

          <p className="text-dark/70 text-lg leading-relaxed">
            Designed with elegance and simplicity, our villas blend natural tones,
            open spaces, and premium amenities to create a peaceful sanctuary —
            perfect for couples, families, and unforgettable summer moments.
          </p>

          <div className="mt-8">
            <a
              href="#gallery"
              className="inline-block px-8 py-3 bg-primary text-white rounded-xl font-semibold hover:bg-sunset hover:text-dark transition duration-300"
            >
              Explore the Gallery
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;