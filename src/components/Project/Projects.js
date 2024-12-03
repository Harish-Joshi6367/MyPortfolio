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
    <Container fluid className="project-section">
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
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              link="https://github.com/soumyajit4419/Plant_AI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studysync}
              title="StudySunc"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              link="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={currency}
              title="Currency Convertor"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              link="https://github.com/Harish-Joshi6367/Currency-Convertor"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Toc Toe"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              link="https://github.com/Harish-Joshi6367/Tic-Tac-Toe"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rockpaper}
              isBlog={false}
              title="Rock Paper Scissors"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%."
              link="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
