import React from "react";
import Button from "react-bootstrap/Button";
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
          src="https://tse2.mm.bing.net/th?id=OIP.XDfqjPnddZB49KTWcv_j3gHaEK&pid=Api&P=0&h=180"
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
        <Button
          variant="warning"
          style={{
            width: "90px",
            marginBottom: "10px",
            padding: "0px",
            borderRadius: "10px",
          }}
        >
          Call Us
        </Button>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: "10px",
          }}
        >
          <Button
            style={{
              width: "90px",
              borderRadius: "10px",
              padding: "0px",
              backgroundColor: "#007bff",
              border: "none",
              color: "white",
            }}
          >
            WhatsApp
          </Button>
          <Button
            variant="primary"
            style={{
              width: "90px",
              borderRadius: "10px",
              padding: "0px",
            }}
          >
            Save
          </Button>
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
          of local and international companies.
        </p>
      </Container>
    </div>
  );
};

export default AboutUs;
