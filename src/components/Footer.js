import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3 className="maker">Designed and Developed by Harish Sharma</h3>
        </Col>
        <Col md="6" className="footer-copywright">
          <h3 className="copied">Copyright © {year} HS</h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
