import React from "react";
import "./Header.css";

function Header() {
  return (
    <div
      className="container" style={{borderBottom: "2px solid black"}}
    >
      <div className="row pt-3">
        <div className="col-4">
          <h1 style={{textAlign: "left", fontSize: "30px", color: "rgb(198, 67, 222)" }}>
            HS.
          </h1>
        </div>
        <div className="col-2"></div>
        <div className="col-6 ">
          <ul className=" d-flex head" style={{ listStyleType: "none" }}>
            <a
              href=""
              style={{ textDecoration: "none"}}
              className="flex-fill m-2 text-muted"
            >
              <li className="navItem"><i class="fa-solid fa-house-chimney"></i>&nbsp;Home</li>
            </a>
            <a
              href=""
              style={{ textDecoration: "none"}}
              className="flex-fill m-2 text-muted"
            >
              <li className="navItem"><i class="fa-regular fa-user"></i>&nbsp;About</li>
            </a>
            <a
              href=""
              style={{ textDecoration: "none"}}
              className="flex-fill m-2 text-muted"
            >
              <li className="navItem"><i class="fa-solid fa-diagram-project"></i>&nbsp;Projects</li>
            </a>
            <a
              href=""
              style={{ textDecoration: "none"}}
              className="flex-fill m-2 text-muted"
            >
              <li className="navItem"><i class="fa-solid fa-file"></i>&nbsp;Resume</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
