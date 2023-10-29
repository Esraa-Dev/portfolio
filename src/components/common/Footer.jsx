import React from "react"
import { social } from "../data/dummydata"

const Footer = () => {
  return (
    <>
      <footer data-aos="zoom-in">
        {social.map((item) => (
          <>
            <i>{item.icon}</i>
          </>
        ))}
        <p>All Right Reserved {new Date().getFullYear()}</p>
      </footer>
    </>
  );
}

export default Footer
