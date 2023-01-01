import React from "react";
import { Heading } from "../common/Heading";
import { about } from "../data/dummydata";
import cv from "../data/images/cv.pdf";

export const About = () => {
  return (
    <>
      <section className="about ">
        <div className="container flexsb">
          {about.map((val) => (
            <>
              <div className="right" data-aos="flip-left">
                <Heading title="About Me" />
                <p>{val.desc}</p>
                {/* <p>{val.desc1}</p> */}

                <button className="primaryBtn">
                  <a href={cv} >
                    Download CV
                  </a>
                </button>

                {/* <button className="primaryBtn">Hire Me</button> */}
              </div>
              <div className="left" data-aos="flip-right">
                <img src={val.cover} alt="" />
              </div>
              {/* <div className="left" data-aos="fade-down-right">
                <img src={val.cover} alt="" />
              </div>
              <div className="right" data-aos="fade-down-left">
                <Heading title="About Me" />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button>Download CV</button>
                <button className="primaryBtn">Download CV</button>
              </div> */}
            </>
          ))}
        </div>
      </section>
    </>
  );
};
