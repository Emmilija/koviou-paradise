

const GoogleMapSection = () => {
  return (
    <section className="w-full py-12 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-heading text-primary mb-6 text-center">
          Find Us on the Map
        </h2>
        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg-soft">
          <iframe
            title="Koviou Paradise Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.123456789!2d23.823456!3d40.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sKoviou%20Paradise%20Studios!5e0!3m2!1sen!2smk!4v1671234567890!5m2!1sen!2smk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;