import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Gallery.css";

const Gallery = () => {
  // Array of image paths using PUBLIC_URL
  const images = [
    `${process.env.PUBLIC_URL}/Assets/img1.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img2.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img3.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img4.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img5.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img6.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img7.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img8.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img9.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img10.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img11.jpg`,
    `${process.env.PUBLIC_URL}/Assets/img12.jpg`,
  ];

  return (
    <Container className="gallery-container text-center container">
      <h2 className="gallery-title light-purple mb-4">Gallery</h2>
      <Row>
        {images.map((image, index) => (
          <Col xs={6} sm={4} md={3} key={index} className="mb-4">
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Gallery;
