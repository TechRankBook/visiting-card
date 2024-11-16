import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Container, Row, Col } from 'react-bootstrap';

function ContactInfo() {
  const iconStyle = { color: '#0d6efd', marginRight: '10px' }; // blue color for icons
  const linkStyle = { color: '#0d6efd', textDecoration: 'none', fontWeight: 'bold' };

  return (
    <Container className="my-4">
      <Row className="gy-3">
        <Col xs={12} md={6}>
          <div style={{ marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faPhone} style={iconStyle} />
            {/* Clickable phone numbers */}
            <a href="tel:+918884555677" style={linkStyle}>+91 8884555677</a> /{' '}
            <a href="tel:+916363688572" style={linkStyle}>+91 6363688572</a>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div style={{ marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faGlobe} style={iconStyle} />
            <a href="http://www.rankbook.in" style={linkStyle} target="_blank" rel="noopener noreferrer">
              www.rankbook.in
            </a>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div style={{ marginBottom: '10px' }}>
            <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
            <a href="mailto:care@rankbook.in" style={linkStyle}>
              care@rankbook.in
            </a>
          </div>
        </Col>
        <Col xs={12} md={6}>
          <div>
            <FontAwesomeIcon icon={faGlobe} style={iconStyle} />
            <a href="http://www.skillkarnataka.com" style={linkStyle} target="_blank" rel="noopener noreferrer">
              www.deanglobalai.com
            </a>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContactInfo;
