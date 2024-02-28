import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <div style={footerStyles}>
      <h3>Design By MOHD ASIF</h3>
      <h5>Contact No: 8543804575</h5>
      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
        <a href="https://www.linkedin.com/in/mohd-asif-6816581b6/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} color="white" />
        </a>
        
        <a href="mailto:masif854380@email.com">
  <FaEnvelope size={30} color="white" />
</a>

      </div>
      <h6>All Rights Reserved By Mohd Asif</h6>
    </div>
  );
};

// CSS styles within the component
const footerStyles = {
  backgroundColor: '#2196f3',
  color: 'white',
  padding: '10px',
  textAlign: 'center',
  position: 'fixed',
  bottom: 0,
  width: '100%',
};

export default Footer;
