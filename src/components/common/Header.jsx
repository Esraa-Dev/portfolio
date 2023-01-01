import { Menu } from "@mui/icons-material";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { navlink } from "../data/dummydata";
import logo from "../data/images/logo.png";

 const Header = () => {
  const [responsive, setResponsive] = useState(false);
  return (
    <>
      <header>
        <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <a href={links.url} key={i}>
                {links.text}
              </a>
            ))}
          </div>
          {/* <div className="container flexsb">
          <div className="logo">
            <img src={logo} alt="" data-aos="zoom-in-right" />
          </div>
          <div className={responsive ? "hideMenu" : "nav"}>
            {navlink.map((links, i) => (
              <a href={links.url} key={i} data-aos="zoom-in-left">
                {links.text}
              </a>
            ))}
          </div> */}

          <button className="toggle" onClick={() => setResponsive(!responsive)}>
            {/* <i className="fa-solid fa-bars icon"></i> */}
            <Menu className="icon" />
          </button>
        </div>
      </header>
    </>
  );
};
export default Header;