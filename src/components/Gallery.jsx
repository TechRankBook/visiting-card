import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../Gallery.css";

const Gallery = () => {
  // Array of image paths from the public/Assets folder
  const images = [
    "/Assets/img1.jpg",
    "/Assets/img2.jpg",
    "/Assets/img3.jpg",
    "/Assets/img4.jpg",
    "/Assets/img5.jpg",
    "/Assets/img6.jpg",
    "/Assets/img7.jpg",
    "/Assets/img8.jpg",
    "/Assets/img9.jpg",
    "/Assets/img10.jpg",
    "/Assets/img11.jpg",
    "/Assets/img12.jpg",
  ];

  return (
    <Container className="gallery-container text-center container ">
      <h2 className="gallery-title light-purple mb-4 ">Gallery</h2>
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
