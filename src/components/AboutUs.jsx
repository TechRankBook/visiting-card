import React from "react";
import Container from "react-bootstrap/Container";

const AboutUs = () => {
  return (
    <div className="container">
      {/* Banner Section with Background Image */}
      <div
        style={{
          backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/000/677/302/large_2x/abstract-technology-banner-background.jpg')`, // Replace with your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "200px",
          position: "relative",
          color: "white",
        }}
        className="d-flex align-items-center justify-content-center"
      >
        <h1
          style={{ zIndex: 1, textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}
        ></h1>

        {/* Rounded Profile Image */}
        <img
          src="/Assets/rblogo.png"
          alt="Profile"
          style={{
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            position: "absolute",
            bottom: "-60px",
            left: "20px",
            border: "4px solid blue",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "325px",
          right: "15px",
          textAlign: "right",
        }}
      >
        <a
          href="tel:+916363688572" // Replace with your phone number
          style={{
            display: "inline-block",
            width: "90px",
            marginBottom: "10px",
            padding: "8px 0",
            borderRadius: "10px",
            backgroundColor: "#ffc107",
            textAlign: "center",
            color: "black",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Call Us
        </a>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <a
            href="https://wa.me/8884555677 " // Replace with your WhatsApp number
            style={{
              display: "inline-block",
              width: "90px",
              borderRadius: "10px",
              padding: "8px 0",
              backgroundColor: "#007bff",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            WhatsApp
          </a>
          <a
            href="/rankbook_contact.vcf" // Path to your vCard file
            download="RankBookCompany.vcf"
            style={{
              display: "inline-block",
              width: "90px",
              borderRadius: "10px",
              padding: "8px 0",
              backgroundColor: "#007bff",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Save
          </a>
        </div>
      </div>

      {/* About Us Section */}
      <br />
      <br />
      <Container style={{ marginTop: "30px", padding: "20px" }}>
        <h1 style={{ fontSize: "24px", marginBottom: "15px" }}>About Us</h1>
        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          Rank Book learning and Software Solutions has redefined the process of
          recruitment to a predictably accurate process with defined parameters
          for matching job skills of potential candidates with the job profiles
          of local and international companies.
        </p>
      </Container>
    </div>
  );
};

export default AboutUs;
