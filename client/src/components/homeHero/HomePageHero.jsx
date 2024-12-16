import React from "react";
import heroImage from "../../frontend_assets/hero_img.png";
const HomePageHero = () => {
  return (
    <div className="border border-2 grid md:flex justify-between items-center">
      {/* left */}
      <div className="md:w-1/2 w-full flex justify-center items-center flex-col">
        {/* Section for OUR BESTSELLERS */}
        <div className="mb-2 flex items-center gap-2">
          <div className="border-t-4 border-black w-20"></div>
          <p className="text-3xl">OUR BESTSELLERS</p>
        </div>

        {/* Latest Arrivals */}
        <p className="text-6xl mb-4">Latest Arrivals</p>

        {/* Section for SHOP NOW */}
        <div className="flex items-center gap-2">
          <p className="text-4xl font-semibold">SHOP NOW</p>
          <div className="border-t-4 border-black w-20"></div>
        </div>
      </div>

      {/* right */}
      <div className="md:w-1/2 w-full">
        <img src={heroImage} alt="Hero" />
      </div>
    </div>
  );
};

export default HomePageHero;
