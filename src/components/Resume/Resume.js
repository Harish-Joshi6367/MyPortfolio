import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import "./Resume.css"
import Contact from "./Contact";

function Resume() {
    return (
        <div>
            <Container fluid className="resume-section mb-5">
                <Particle />
                <Row>
                    <h1 className="purple fs-2">Download to My CV</h1>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                <Button
                    variant="primary"
                    target="_blank"
                    style={{ maxWidth: "250px" }}
                    className="cv"
                >
                    <AiOutlineDownload />
                    &nbsp;Download CV
                </Button>
                </Row>

            </Container>
            <Contact />
        </div>
    )
};

export default Resume;