import heroImage from '../assets/images/hero (2).webp';
const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">

  {/* LCP Image */}
  <img
    src={heroImage}
    alt="Villa Paradise - Akti Koviou"
    width={1920}
    height={1080}
    sizes="100vw"
    className="absolute inset-0 w-full h-full object-cover"
    fetchPriority="high"
    decoding="async"
  />

  {/* Gradient */}
  <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/-80 to-[#1E3A5F]-30" />

  {/* Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
    <div className="bg-dark/70 backdrop-blur-md rounded-xl px-8 py-6 max-w-3xl shadow-lg-soft">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white drop-shadow-lg">
        Welcome to Villa Paradise
      </h1>

      <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-gray-200">
        <a
          href="https://www.google.com/maps?q=Akti+Koviou+1,+Sithonia+630+88,+Greece"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline hover:text-orange-400 transition-colors duration-300"
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