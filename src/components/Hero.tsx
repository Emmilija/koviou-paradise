
const Hero: React.FC = () => {
  return (
<section className="relative w-full h-screen">

  <img
    src="/hero.webp"
    alt="Villa Paradise"
    className="absolute inset-0 w-full h-full object-cover"
    fetchPriority="high"
    loading="eager"
  />

  <div className="absolute inset-0 bg-black/50"></div>

  <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold">
      Villa Paradise
    </h1>
  </div>

</section>
  );
};

export default Hero;