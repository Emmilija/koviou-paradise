
const Hero: React.FC = () => {

  return (
<section className="relative w-full h-screen">

  <img
    src="/hero-medium.webp"
    srcSet="
      /hero-small.webp 600w,
      /hero-medium.webp 1200w,
      /hero-large.webp 1600w"
      decoding="async"
    sizes="100vw"
    alt="Villa Paradise"
    className="w-full h-full object-cover"
    fetchPriority="high"
    loading="eager"
  />


  <div className="absolute inset-0 bg-black/50"></div>

  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center font-heading text-white px-4">
    <h1 className="text-4xl md:text-6xl font-bold">
      Villa Paradise
    </h1>

    <button
      onClick={() =>
        window.open(
          "https://www.google.com/maps/search/Akti+Koviou+1,+Sithonia+630+88,+Greece",
          "_blank"
        )
      }
      className="underline mt-2"
    >
      Akti Koviou
    </button>
  </div>

</section>
  );
};

export default Hero;