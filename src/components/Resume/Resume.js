import React from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import "./Resume.css"
import Contact from "./Contact";

function Resume() {

    // function DownloadFile() {
    //     const fileUrl = "https://www.file.io/nCoV/download/dnUwh7KybjRw"
    //     const fileName = "Harish_Resume1.pdf"

    //     const link = document.createElement('a');
    //     link.href = fileUrl;
    //     link.download = fileName

    //     document.body.appendChild(link)
    //     link.click();

    //     document.body.removeChild(link);
    // }

    return (
        <div>
            <Container id="resume" fluid className="resume-section mb-5">
                <Particle />
                <Row>
                    <h1 className="purple fs-2">Download to My CV</h1>
                </Row>
                <Row style={{ justifyContent: "center", position: "relative" }}>
                
                    <a 
                    className="cv btn btn4" href="Harish.pdf" download>
                    
                    Download CV</a>
                </Row>

            </Container>
            <Contact />
        </div>
    )
};

export default Resume;