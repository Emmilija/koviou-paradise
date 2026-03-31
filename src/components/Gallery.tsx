
import React, { useRef, useState, useEffect } from "react";
// VILLA
import villaDesk from '../assets/images/villa desk.webp';
import villaMed from '../assets/images/villa med.webp';
import villaSmall from '../assets/images/villa small.webp';

// YARD
import yardDesk from '../assets/images/yard desk.webp';
import yardMed from '../assets/images/yard med.webp';
import yardSmall from '../assets/images/yard small.webp';

// BEDROOM
import bedroomDesk from "../assets/images/bedroom desk.webp";
import bedroomMed from "../assets/images/bedroom med.webp";
import bedroomSmall from "../assets/images/bedroom small.webp";

// BED
import bedDesk from '../assets/images/bed desk.webp';
import bedMed from '../assets/images/bed med.webp';
import bedSmall from '../assets/images/bed small.webp';

// BEDS
import bedsDesk from '../assets/images/beds desk.webp';
import bedsMed from '../assets/images/beds med.webp';
import bedsSmall from '../assets/images/beds small.webp';

// TWOBED
import twobedDesk from "../assets/images/twobed desk.webp";
import twobedMed from "../assets/images/twobed med.webp";
import twobedSmall from "../assets/images/twobed small.webp";

// KITCHEN
import kitchenDesk from '../assets/images/kitchen desk.webp';
import kitchenMed from '../assets/images/kitchen med.webp';
import kitchenSmall from '../assets/images/kitchen small.webp';

// TOILET
import toiletDesk from '../assets/images/toilet desk.webp';
import toiletMed from '../assets/images/toilet med.webp';
import toiletSmall from '../assets/images/toilet small.webp';


// ✅ IMPORTANT: Use objects instead of strings
const images = [
  { small: villaSmall, medium: villaMed, large: villaDesk },
  { small: yardSmall, medium: yardMed, large: yardDesk },
  { small: bedroomSmall, medium: bedroomMed, large: bedroomDesk },
  { small: bedSmall, medium: bedMed, large: bedDesk },
  { small: bedsSmall, medium: bedsMed, large: bedsDesk },
  { small: twobedSmall, medium: twobedMed, large: twobedDesk },
  { small: kitchenSmall, medium: kitchenMed, large: kitchenDesk },
  { small: toiletSmall, medium: toiletMed, large: toiletDesk },
];

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  // ✅ Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (activeIndex === null) return;

      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowRight") {
        setActiveIndex(prev =>
          prev === images.length - 1 ? 0 : (prev as number) + 1
        );
      }
      if (e.key === "ArrowLeft") {
        setActiveIndex(prev =>
          prev === 0 ? images.length - 1 : (prev as number) - 1
        );
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeIndex]);

  return (
    <section id="gallery" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-footer">
            Villa Gallery
          </h2>
          <div className="w-20 h-1 bg-sunset mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="relative w-full max-w-7xl mx-auto" style={{ height: '18rem' }}>

          {/* Left Arrow */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-md text-primary rounded-full shadow-lg"
          >
            ‹
          </button>

          {/* Images */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth px-4 h-full snap-x snap-mandatory"
          >
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(index)} 
                className="relative flex-shrink-0 w-80 sm:w-96 rounded-2xl overflow-hidden shadow-lg-soft group snap-start cursor-pointer"
              >
                <img
                  src={img.small}
                  srcSet={`
                    ${img.small} 500w,
                    ${img.medium} 800w,
                    ${img.large} 1200w
                  `}
                  decoding="async"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 384px"
                  alt={`Villa ${index + 1}`}
                  loading="lazy"
                  className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500"
                />
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 text-primary rounded-full shadow-lg"
          >
            ›
          </button>

        </div>
      </div>

      {/* ✅ LIGHTBOX */}
      {activeIndex !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">

          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 text-white text-3xl"
          >
            ✕
          </button>

          {/* Left */}
          <button
            onClick={() =>
              setActiveIndex(prev =>
                prev === 0 ? images.length - 1 : (prev as number) - 1
              )
            }
            className="absolute left-6 text-white text-4xl"
          >
            ‹
          </button>

          {/* Image */}
        <img
  src={images[activeIndex].medium}
  srcSet={`
    ${images[activeIndex].medium} 800w,
    ${images[activeIndex].large} 1200w
  `}
  loading="eager"
  className="max-w-[90%] max-h-[85%] object-contain rounded-xl"
/>

          {/* Right */}
          <button
            onClick={() =>
              setActiveIndex(prev =>
                prev === images.length - 1 ? 0 : (prev as number) + 1
              )
            }
            className="absolute right-6 text-white text-4xl"
          >
            ›
          </button>

        </div>
      )}
    </section>
  );
};

export default Gallery;