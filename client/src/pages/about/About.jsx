import React from "react";
import aboutImg from "../../frontend_assets/about_img.png";
import ChooseUsWhy from "../../components/ChooseUsWhy/ChooseUsWhy";
import Subscribe from '../../components/subscribe/Subscribe'
const About = () => {
  return (
    <div className="container my-5">
    <div className="border-t-2 border-black w-full mx-7"></div>
  
    <div className="flex gap-2 justify-center items-center my-10">
      <p className="text-2xl font-semibold">ABOUT US</p>
      <div className="border-t-2 border-black w-10"></div>
    </div>
  
    {/* About section */}
    <div className="grid md:flex justify-center items-stretch">
      {/* About image */}
      <div className="flex-grow h-full">
        <img src={aboutImg} className="h-full w-full object-cover p-4" />
      </div>
  
      {/* About content */}
      <div className="w-full px-4 flex flex-col justify-center">
        <p className="text-sm md:text-lg mb-4">
          Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
        </p>
        <p className="text-sm md:text-lg mb-4">
          Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.
        </p>
  
        <p className="text-lg md:text-2xl font-medium mb-4">Our Mission</p>
        <p className="text-sm md:text-lg mb-4">
          Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.
        </p>
      </div>
    </div>

    <ChooseUsWhy />
    <Subscribe />
  </div>
  
  );
};

export default About;
