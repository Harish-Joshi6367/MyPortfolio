import React from 'react';
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { Container, Row, Col } from 'react-bootstrap';
import "./Resume.css";

function Contact() {
    return (
        <Container>
            <Row>
                <Col md={12} className="home-about-social">
                    <h1>FIND ME ON</h1>
                    <p>
                    Feel free to <span className="purple">connect </span>with me
                    </p>
                    <ul className="home-about-social-links">
                    <li className="social-icons">
                        <a
                        href="https://github.com/Harish-Joshi6367"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <AiFillGithub />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://twitter.com/harish"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <AiOutlineTwitter />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.linkedin.com/in/harish63/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour  home-social-icons"
                        >
                        <FaLinkedinIn />
                        </a>
                    </li>
                    <li className="social-icons">
                        <a
                        href="https://www.instagram.com/iharish_sharma/"
                        target="_blank"
                        rel="noreferrer"
                        className="icon-colour home-social-icons"
                        >
                        <AiFillInstagram />
                        </a>
                    </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact