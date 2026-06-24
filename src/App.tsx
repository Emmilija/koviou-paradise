import Navbar from "./components/Navbar";
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import GoogleMapSection from "./components/GoogleMaps";
import Reviews from "./components/Reviews";
import Rooms from "./components/Rooms";
import RoomDetails from "./pages/RoomDetails";
import ScrollToTop from "./components/ScrollToTop";

const Gallery = React.lazy(() => import("./components/Gallery"));

const App = () => {
  return (
    <div className="App">
      <Navbar />

      <ScrollToTop />

      <Routes>
        <Route
          path="/"
          element={
            <main>
              <Hero />
              <AboutUs />
              <Rooms />
              <Reviews />

              <Suspense fallback={<div className="h-40" />}>
                <Gallery />
              </Suspense>

              <GoogleMapSection />
            </main>
          }
        />

        <Route path="/rooms/:type" element={<RoomDetails />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;