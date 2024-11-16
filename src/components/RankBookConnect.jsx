import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../RankBookConnect.css";

const RankBookConnect = () => {
  return (
    <div className="container" >
    <Container className="text-center  container ">
      <h2 className="mb-4 light-purple">Connect us</h2>
      <Row  className="mx-5">
        {/* Left Column */}
        <Col xs={6} md={6} className="text-start">
          <div className="platform mb-3">
            <i className="fab fa-instagram icon"></i>
            <span>rank_book.in</span>
          </div>
          <div className="platform mb-3">
            <i className="fab fa-facebook icon"></i>
            <span>RankBook</span>
          </div>
          <div className="platform mb-3">
            <i className="fab fa-snapchat icon"></i>
            <span>RankBook</span>
          </div>
          <div className="platform mb-3">
            <i className="fab fa-telegram icon"></i>
            <span>RankBook</span>
          </div>
        </Col>

        {/* Right Column */}
        <Col xs={6} md={6} className="text-start">
          <div className="platform mb-3">
            <i className="fab fa-twitter icon"></i>
            <span>rank_book</span>
          </div>
          <div className="platform mb-3">
            <i className="fab fa-whatsapp icon"></i>
            <span>rank_book.in</span>
          </div>
          <div className="platform mb-3">
            <i className="fab fa-youtube icon"></i>
            <span>RankbookIndia</span>
          </div>
          <div className="platform mb-3">
            <i className="fab fa-google-play icon"></i>
            <span>RankBook</span>
          </div>
        </Col>
      </Row>

      {/* Footer Section */}
      <div className="company-info mt-4">
        <i className="fab fa-linkedin icon"></i>
        <span className="" style={{ fontSize: '17px' }}> RankBook Learning & Software Solutions Pvt Ltd</span>
        <p className="fw-bold text-primary">
  <i className="fas fa-map-marker-alt"></i> MYSURU | HASSAN | BENGALURU | MANGALURU
</p>
      </div>
    </Container>
    </div>
  );
};

export default RankBookConnect;
