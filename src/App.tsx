import Navbar from "./components/Navbar";

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import GoogleMapSection from "./components/GoogleMaps";
import Reviews from './components/Reviews'
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
  
        <Hero />
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