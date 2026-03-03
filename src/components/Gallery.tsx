



// import React, { useRef } from "react";
// import villa1 from "../assets/images/villa1.webp";
// import villa2 from "../assets/images/villa2.webp";
// import villa3 from "../assets/images/villa3.webp";
// import villa4 from "../assets/images/villa4.webp";
// import villa5 from "../assets/images/villa5.webp";
// import villa6 from "../assets/images/beach.webp";

// const images = [villa1, villa2, villa3, villa4, villa5, villa6];

// const Gallery = () => {
//   const scrollRef = useRef<HTMLDivElement>(null);

//   const scrollLeft = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRight = () => {
//     if (scrollRef.current) {
//       scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <section id="gallery" className="py-14 px-4 bg-stone relative">
//       <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-dark text-center mb-8">
//         Villa Gallery
//       </h2>

//       {/* Scrollable gallery */}
//       <div className="relative max-w-6xl mx-auto">
//         {/* Left arrow */}
//         <button
//           onClick={scrollLeft}
//           className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-light rounded-full p-2 shadow-lg-soft hover:bg-secondary transition"
//         >
//           &#8592;
//         </button>

//         {/* Images container */}
//         <div
//           ref={scrollRef}
//           className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-8"
//         >
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className="flex-shrink-0 w-72 sm:w-80 md:w-96 overflow-hidden rounded-xl shadow-lg-soft cursor-pointer transform hover:scale-105 transition duration-300"
//             >
//               <img
//                 src={img}
//                 alt={`Villa ${index + 1}`}
//                 className="w-full h-64 sm:h-72 md:h-80 object-cover"
//               />
//             </div>
//           ))}
//         </div>

//         {/* Right arrow */}
//         <button
//           onClick={scrollRight}
//           className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-primary text-light rounded-full p-2 shadow-lg-soft hover:bg-secondary transition"
//         >
//           &#8594;
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Gallery;

import React, { useRef } from "react";
import villa1 from "../assets/images/villa1.webp";
import villa2 from "../assets/images/villa2.webp";
import villa3 from "../assets/images/villa3.webp";
import villa4 from "../assets/images/villa4.webp";
import villa5 from "../assets/images/villa5.webp";
import villa6 from "../assets/images/beach.webp";
import yard from "../assets/images/yard.jpeg";
import house from "../assets/images/house.jpeg"
import romm1 from "../assets/images/room1.jpeg"

const images = [house, romm1, villa1, villa2, villa3, villa4, villa5, villa6, yard, ];

const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = (): void => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = (): void => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  return (
    <section id="gallery" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading text-dark">
            Villa Gallery
          </h2>
          <div className="w-20 h-1 bg-sunset mx-auto mt-4 rounded-full"></div>
        </div>

<div className="relative w-full max-w-7xl mx-auto" style={{ height: '18rem' /* match image height h-72 */ }}>
  {/* Left Arrow */}
  <button
    onClick={scrollLeft}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-md text-primary rounded-full shadow-lg hover:bg-sunset hover:text-dark transition"
  >
    <span className="text-xl font-bold">&#8249;</span>
  </button>

  {/* Scrollable Images */}
  <div
    ref={scrollRef}
    className="flex gap-6 overflow-x-auto scroll-smooth px-4 h-full"
  >
    {images.map((img, index) => (
      <div
        key={index}
        className="relative flex-shrink-0 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-lg-soft group"
      >
        <img
          src={img}
          alt={`Villa ${index + 1}`}
          className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition duration-500 flex items-end p-6">
          <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-500">
            
          </span>
        </div>
      </div>
    ))}
  </div>

  {/* Right Arrow */}
  <button
    onClick={scrollRight}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 flex items-center justify-center bg-white/90 backdrop-blur-md text-primary rounded-full shadow-lg hover:bg-sunset hover:text-dark transition"
  >
    <span className="text-xl font-bold">&#8250;</span>
  </button>
</div>
      </div>
    </section>
  );
};

export default Gallery;