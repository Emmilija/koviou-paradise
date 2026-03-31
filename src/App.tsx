import Navbar from "./components/Navbar";
import React, { Suspense } from "react";

import Hero from "./components/Hero";
import Footer from "./components/Footer";

import AboutUs from "./components/AboutUs";
import GoogleMapSection from "./components/GoogleMaps";
import Reviews from './components/Reviews'
const App = () => {
  const Gallery = React.lazy(() => import("./components/Gallery"));
  return (
    <div className="App">
      <Navbar />
      <main>
  
        <Hero />
        <AboutUs />
        <Reviews />
   <Suspense fallback={<div className="h-40" />}>
  <Gallery />
</Suspense>
        <GoogleMapSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;