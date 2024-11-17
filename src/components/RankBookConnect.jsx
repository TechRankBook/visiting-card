import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../RankBookConnect.css";

const RankBookConnect = () => {
  return (
    <div className="container">
      <Container className="text-center container">
        <h2 className="mb-4 light-purple">Connect us</h2>
        <Row className="mx-5 g-4">
          {/* Left Column */}
          <Col xs={6} md={6} className="text-start">
            <div className="platform mb-3">
              <i className="fab fa-instagram icon"></i>
              <a
                href="https://www.instagram.com/rank_book.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <span> rank_book.in</span>
              </a>
            </div>
            <div className="platform mb-3">
              <i className="fab fa-facebook icon"></i>
              <a
                href="https://www.facebook.com/profile.php?id=61564314301321"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <span> RankBook</span>
              </a>
            </div>
            <div className="platform mb-3">
              <i className="fab fa-snapchat icon"></i>
              <a
                href="https://www.snapchat.com/add/RankBook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <span> RankBook</span>
              </a>
            </div>
            <div className="platform mb-3">
              <i className="fab fa-telegram icon"></i>
              <a
                href="https://t.me/RankBook"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <span> RankBook</span>
              </a>
            </div>
          </Col>

          {/* Right Column */}
          <Col xs={6} md={6} className="text-start">
            <div className="platform mb-3">
              <i className="fab fa-twitter icon"></i>
              <a
                href="https://twitter.com/rank_book"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <span> rank_book</span>
              </a>
            </div>
            <div className="platform mb-3">
              <i className="fab fa-whatsapp icon"></i>
              <a
                href="https://wa.me/+918884555677"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <span> rank_book.in</span>
              </a>
            </div>
            <div className="platform mb-3">
              <i className="fab fa-youtube icon"></i>
              <a
                href="https://www.youtube.com/@RankBookIndia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <span> RankbookIndia</span>
              </a>
            </div>
            <div className="platform mb-3">
              <i className="fab fa-google-play icon"></i>
              <a
                href="https://play.google.com/store/apps/details?id=co.nick.kgouv"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                <span> RankBook</span>
              </a>
            </div>
          </Col>
        </Row>

        {/* Footer Section */}
        <div className="company-info mt-4">
          <i className="fab fa-linkedin icon"></i>
          <a
            href="https://www.linkedin.com/company/rankbook-learning-software-solutions-pvt-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-decoration-none"
          >
            <span style={{ fontSize: "17px" }}>
              {" "}
              RankBook Learning & Software Solutions Pvt Ltd
            </span>
          </a>
          <p className="fw-bold text-primary">
            <a
              href="https://maps.google.com?q=Mysuru,+Hassan,+Bengaluru,+Mangaluru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none text-primary"
            >
              <i className="fas fa-map-marker-alt"></i> MYSURU | HASSAN |
              BENGALURU | MANGALURU
            </a>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default RankBookConnect;
