import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Gallery.css";

const Gallery = () => {
  // Array of placeholder images
  const images = new Array(8).fill(
    "https://wallpaperaccess.com/full/3365797.jpg"
  );

  return (
    <Container className="gallery-container text-center container">
      <h2 className="gallery-title light-purple mb-4">Gallery</h2>
      <Row>
        {images.map((image, index) => (
          <Col xs={3}key={index} className="mb-4">
            <img src={image} alt={`Gallery ${index}`} className="gallery-image" />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
