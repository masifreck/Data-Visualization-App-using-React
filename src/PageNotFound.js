import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImage from './notfound.png';

const PageNotFound = () => {
  return (
    <div style={pageNotFoundStyle}>
      <img src={notFoundImage} alt="Page Not Found" style={imageStyle} />
      <h1 style={headingStyle}>Page Not Found</h1>
      <p style={paragraphStyle}>
        The page you are looking for might be in another dimension. Let's get back to{' '}
        <Link to="/home" style={linkStyle}>
          Home
        </Link>
        .
      </p>
    </div>
  );
};

// Styles
const pageNotFoundStyle = {
  textAlign: 'center',
  padding: '20px',
};

const imageStyle = {
  width: '100%',
  maxWidth: '400px',
  margin: '20px auto',
  borderRadius: '10px',
};

const headingStyle = {
  fontSize: '28px',
  color: '#333',
  marginBottom: '10px',
};

const paragraphStyle = {
  fontSize: '16px',
  color: '#555',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'blue',
  fontWeight: 'bold',
};
export default PageNotFound;
