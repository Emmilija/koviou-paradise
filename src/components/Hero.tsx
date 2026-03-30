
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

  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
    <h1 className="text-4xl md:text-6xl font-bold">
      Villa Paradise
    </h1>
   <button
          onClick={() =>
            window.open(
              "https://www.google.com/maps/search/Akti+Koviou+1,+Sithonia+630+88,+Greece/@40.1826677,23.6930904,14z",
              "_blank"
            )
          }
          className="underline mt-2">Akti Koviou</button>
  </div>

</section>
  );
};

export default Hero;