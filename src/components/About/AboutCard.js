import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view card">
      <Card.Body>
        <blockquote className="blockquote mb-1">
          <p className="purple" style={{textAlign:"center",fontSize:"25px" }}>  
            Skills
          </p>
          <ul>
            <li className="about-activity2 skill">
                <ImPointRight /> Java
            </li>
            <li className="about-activity2 skill">
                <ImPointRight /> JavaScript
            </li>
            <li className="about-activity2 skill">
                <ImPointRight /> Cloud Computing
            </li>
            <li className="about-activity2 skill">
                <ImPointRight /> MERN Stack
            </li>
            <li className="about-activity2 skill">
                <ImPointRight /> Git
            </li>
            <li className="about-activity2 skill">
                <ImPointRight /> Containerization
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer mt-1">Harish</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
