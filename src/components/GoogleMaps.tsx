import { useState } from "react";

const GoogleMapSection = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <section className="w-full py-12 bg-light">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-heading font-bold text-footer mb-6 text-center">
          Find Us on the Map
        </h2>

        <div className="w-full h-96 rounded-xl overflow-hidden shadow-lg-soft relative">

          {/* ✅ PREVIEW (fast, no performance cost) */}
          {!showMap && (
            <div
              onClick={() => setShowMap(true)}
              className="relative w-full h-full cursor-pointer"
            >
              <img
                src="/map-preview.webp"
                alt="Map preview"
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="bg-white px-4 py-2 rounded-lg font-semibold">
                  Open Map
                </span>
              </div>
            </div>
          )}

          {/* ✅ REAL MAP (loads only when clicked) */}
          {showMap && (
            <iframe
              title="Villa Paradise Location"
              src="https://www.google.com/maps?q=Akti+Koviou+1,+Sithonia+630+88,+Greece&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          )}

        </div>
      </div>
    </section>
  );
};

export default GoogleMapSection;