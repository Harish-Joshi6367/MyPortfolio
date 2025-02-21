import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import currency from "../../Assets/Projects/currency.png";
import rockpaper from "../../Assets/Projects/rockpaper.png";
import studysync from "../../Assets/Projects/studysync.png";
import wanderlust from "../../Assets/Projects/wanderlust.png";
import tictactoe from "../../Assets/Projects/tictactoe.png";
import zerodha from "../../Assets/Projects/zerodha.png";

function Projects() {
  return (
    <Container id="projects" fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "100px", }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlust}
              title="Wanderlust"
              description="Tracking to hotels in whole world build with html, css, js and node.js code with instant view of website. You can add your own hotel and choose the rate of the hotel per night. I use google map and many api to fetch the data. Proper use to Authentication and Autherization for Login and Signup."
              link="https://github.com/Harish-Joshi6367/MAJORPROJECT"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zerodha}
              title="SmartTrade Navigator"
              description="A modern, user-friendly stock trading and investment platform inspired by industry leaders like Zerodha. Built to provide seamless investing, real-time market insights, and low-cost trading for users. This platform empowers users to trade stocks, invest in mutual funds, and manage their portfolios with ease."
              link="https://github.com/Harish-Joshi6367/Zerodha-clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studysync}
              title="StudySync"
              description="Creating seamless and responsive experiences for the digital world. Building modern web applications with clean design, efficient code, and innovative solutions. For purpose of learning to CSS and HTML."
              link="https://github.com/Harish-Joshi6367/StudySync"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              title="Currency Convertor"
              description="The Currency Converter is a web-based application that allows users to convert currencies in real-time using up-to-date exchange rates. It is designed to be fast, accurate, and user-friendly, making it a useful tool for travelers, traders, and financial analysts."
              link="https://github.com/Harish-Joshi6367/Currency-Convertor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Toc Toe"
              description="Tic-Tac-Toe is a classic two-player game where players take turns marking X or O on a 4x4 grid. The goal is to align three marks horizontally, vertically, or diagonally before the opponent."
              link="https://github.com/Harish-Joshi6367/Tic-Tac-Toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rockpaper}
              isBlog={false}
              title="Rock Paper Scissors"
              description="Rock-Paper-Scissors is a fun and interactive game built with JavaScript. Play against the computer with real-time score tracking and smooth animations. The game features an responsive design, and engaging visuals, making it an exciting way to test your luck and strategy!"
              link="https://github.com/Harish-Sharma6367/Rock-Paper-Scissors"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
