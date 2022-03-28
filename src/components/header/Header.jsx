import React from "react";
import HeaderButtons from "./HeaderButtons";
import "./header.css";
import myImg from "../../assets/images/myImage.webp";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Carlos</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <HeaderButtons />
        <div className="me">
          <img src={myImg} alt="my photo" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
