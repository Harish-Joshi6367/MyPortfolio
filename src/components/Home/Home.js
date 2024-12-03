import React from "react";
import homeLogo from "../../Assets/home-main.svg";
import Type from "./Type";
import "./Home.css";

function Home() {
  return (
    <section>
      <div fluid className="home-section" id="home">
        <div className="home-content">
          <div className="row">
            <div className="home-header col">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> HARISH SHARMA</strong>
              </h1>

              <div className="type">
                <Type />
              </div>
            </div>

            <div className="col" style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
