import aboutImage from "../assets/images/house1.webp";

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-dark mb-6">
            Discover Coastal Serenity
          </h2>

          <div className="w-16 h-1 bg-sunset mb-6 rounded-full"></div>

          <p className="text-dark-80 text-lg leading-relaxed mb-6">
        Located in the heart of Sithonia, Villa Paradise offers a unique and unforgettable stay in one of the most beautiful parts of the Aegean Sea. Nestled in the quiet area of Elia, between the charming coastal towns of Nikiti and Neos Marmaras, the villa provides the perfect balance of privacy, comfort, and easy access to vibrant seaside life.
        Sithonia is also known for its authentic Greek character, traditional seaside tavernas, fresh local cuisine, and welcoming hospitality.
          </p>

          <p className="text-dark-70 text-lg leading-relaxed">
           You can enjoy some of the most stunning beaches in Sithonia and across Halkidiki. The area is known for its unspoiled natural beauty, golden sandy shores, and breathtaking sunsets over the Aegean.
         

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