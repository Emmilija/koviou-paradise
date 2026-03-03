import React from "react";
import Navbar from "./components/Navbar";

import Services from "./components/Services";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import GoogleMapSection from "./components/GoogleMaps";
import Reviews from './components/Reviews'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main className="pt-20">
  
        <Services />
        <AboutUs />
        <Reviews />
        <Gallery />
        <GoogleMapSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;