import React from "react";
import Container from "react-bootstrap/Container";

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{ fontFamily: "Arial, sans-serif" }}>
      <style>
        {`
          .banner-section {
            background-size: cover;
            background-position: center;
            height: 250px;
            position: relative;
            color: white;
          }
          .banner-title {
            z-index: 1;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
            font-size: 2rem;
            margin-top: 80px;
          }
          .profile-image {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            position: absolute;
            bottom: -60px;
            left: 20px;
            border: 4px solid blue;
          }
          .contact-buttons {
            text-align: right;
            margin-top: 100px;
            padding-right: 15px;
          }
          .contact-button {
            display: inline-block;
            width: 90px;
            border-radius: 10px;
            padding: 8px 0;
            text-align: center;
            text-decoration: none;
            font-weight: bold;
          }
          .call-button {
            background-color: #ffc107;
            color: black;
          }
          .whatsapp-button, .save-button {
            background-color: #007bff;
            color: white;
          }
          .about-us-content {
            margin-top: 30px;
            padding: 20px;
          }
          .about-us-title {
            font-size: 24px;
            margin-bottom: 15px;
          }
          .about-us-text {
            font-size: 16px;
            line-height: 1.6;
          }
        `}
      </style>

      {/* Banner Section with Background Image */}
      <div
        className="banner-section"
        style={{
          marginTop: "-80px",
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/000/677/302/large_2x/abstract-technology-banner-background.jpg')`,
        }}
      >
        <h1 className="banner-title" style={{ textAlign: "center" }}  marginTop="30px">Welcome to Rank Book</h1>

        {/* Rounded Profile Image */}
        <img
          src={`${process.env.PUBLIC_URL}/Assets/rblogo.png`}
          alt="Rank Book Logo"
          className="profile-image"
        />
      </div>

      {/* Contact Buttons */}
      <div className="contact-buttons">
        <a href="tel:+918884555677" className="contact-button call-button">
          Call Us
        </a>

        <div className="social-buttons" style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <a href="https://wa.me/+918884555677" className="contact-button whatsapp-button">
            WhatsApp
          </a>
          <a
            href={`${process.env.PUBLIC_URL}/rankbook_contact.vcf`}
            download="RankBookCompany.vcf"
            className="contact-button save-button"
          >
            Save
          </a>
        </div>
      </div>

      {/* About Us Section */}
      <Container className="about-us-content">
        <h1 className="about-us-title">About Us</h1>
        <p className="about-us-text">
          Rank Book Learning and Software Solutions has redefined the process of recruitment to a predictably accurate
          process with defined parameters for matching job skills of potential candidates with the job profiles of local
          and international companies.
        </p>
      </Container>
    </div>
  );
};

export default AboutUs;
