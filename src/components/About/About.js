import React from "react";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Intro from "./Intro";

function About() {
  return (
    <div className="about-section" style={{width: "80%", marginLeft:"10%"}}>
      <Particle />
      <div>
        <div><Intro /></div>
        <div className="row" style={{ justifyContent: "center"}}>
          <div
            style={{
              justifyContent: "center",
              paddingBottom: "50px",
            }}
            className="col"
          >
            <Aboutcard />
          </div>
          <div
            style={{ padding: "0 0 50px 5%"}}
            className="about-img col"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
