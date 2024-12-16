import React from "react";
import logo from "../../frontend_assets/logo.png";
import { Link } from "react-router-dom";
import searchIcon from "../../frontend_assets/search_icon.png";
import profileIcon from "../../frontend_assets/profile_icon.png";
import cartIcon from "../../frontend_assets/cart_icon.png";
import menuIcon from "../../frontend_assets/menu_icon.png";



const Navbar = () => {
  return (
    <div className="flex justify-between items-center container">
      {/* logo */}
      <div>
        <img src={logo} className="w-[150px]" />
      </div>

      {/* menu */}
      <div>
        <ul className="justify-center items-center gap-4 hidden md:flex">
          <li>
            <Link to={"/"}>HOME</Link>
          </li>
          <li>
            <Link to={"/collection"}>COLLECTION</Link>
          </li>
          <li>
            <Link to={"/about"}>ABOUT</Link>
          </li>
          <li>
            <Link to={"/contact"}>CONTACT</Link>
          </li>
        </ul>
      </div>

      {/* icons */}
      <div className="flex justify-center items-center gap-4">
        <img src={searchIcon} className="w-[30px]"/>
        <img src={profileIcon} className="w-[30px]"/>
        <img src={cartIcon} className="w-[30px]"/>
        <img src={menuIcon} className="w-[30px] md:hidden block"/>
      </div>
    </div>
  );
};

export default Navbar;
