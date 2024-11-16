import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faGlobe, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function ContactInfo() {
  const iconStyle = { color: '#0d6efd', marginRight: '10px' }; // blue color for icons
  const linkStyle = { color: '#0d6efd', textDecoration: 'none', fontWeight: 'bold' };

  return (
    <div className="container">
    <div className="container">
      <div style={{ marginBottom: '10px' }}>
        <FontAwesomeIcon icon={faPhone} style={iconStyle} />
        <span style={linkStyle}>+91 8884555677 / +91 6363688572</span>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <FontAwesomeIcon icon={faGlobe} style={iconStyle} />
        <a href="http://www.rankbook.in" style={linkStyle} target="_blank" rel="noopener noreferrer">
          www.rankbook.in
        </a>
      </div>
      <div style={{ marginBottom: '10px' }}>
        <FontAwesomeIcon icon={faEnvelope} style={iconStyle} />
        <a href="mailto:care@rankbook.in" style={linkStyle}>
          care@rankbook.in
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faGlobe} style={iconStyle} />
        <a href="http://www.deanglobalai.com" style={linkStyle} target="_blank" rel="noopener noreferrer">
          www.deanglobalai.com
        </a>
      </div>
    </div>
    </div>
  );
}

export default ContactInfo;
