import React from "react";
import logo from "../../frontend_assets/logo.png";
const Footer = () => {
  return (
    <div className="container">
      <div className="grid gap-5 md:flex justify-between items-center">
        {/* about company */}
        <div className="md:w-1/3">
          <img src={logo} className="w-[100px] mb-2"/>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        {/* company links */}
        <div>

        <p className="mb-2">COMPANY</p>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
        </div>

        {/* get in touch */}
        <div>
          <p className="mb-2">GET IN TOUCH</p>
          <p>+1-000-000-0000</p>
          <p>deepanshudev1993@gmail.com</p>
          <p>instagram</p>
        </div>
      </div>

      {/* copyright */}
      <div>
        <br />
        <p>Copyright 2024@ greatstack.dev - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
