// import React from "react";
// import heroImage from "../assets/images/cover.png";

// const Hero: React.FC = () => {
//   return (
//     <section className="relative w-full">
//       {/* Background image */}
//       <div
//         className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] bg-cover bg-center"
//         style={{ backgroundImage: `url(${heroImage})` }}
//       ></div>

//       {/* Overlay text */}
//       <div className="absolute bottom-0 left-0 w-full flex flex-col items-center text-center px-4 pb-12">
//         <div className="bg-black/40 rounded-xl px-6 py-4 max-w-3xl">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-white font-bold">
//             Welcome to Villa Paradise
//           </h1>
//           <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/80">
//             <a
//               href="https://www.google.com/maps?q=Akti+Koviou+1,+Sithonia+630+88,+Greece"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline hover:text-green-400 transition-colors"
//             >
//               Akti Koviou
//             </a>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import heroImage from "../assets/images/cover.png";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage}), linear-gradient(to top, rgba(30,58,95,0.75), rgba(30,58,95,0.2))`,
        }}
      ></div>

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <div className="bg-dark/50 backdrop-blur-md rounded-xl px-8 py-6 max-w-3xl shadow-lg-soft">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-lg">
            Welcome to Villa Paradise
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/80">
            <a
              href="https://www.google.com/maps?q=Akti+Koviou+1,+Sithonia+630+88,+Greece"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-sunset transition-colors duration-300"
            >
              Akti Koviou
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;