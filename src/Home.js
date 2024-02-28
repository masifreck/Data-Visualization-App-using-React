// HomePage.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';



const HomePage = (title) => {
  return (
    <div style={{}}>
      <Navbar title='Home Page'/>
      <div style={{display:'flex',flexDirection:'column'}}>  
  <h1 style={{textAlign:'center',color:''}}>Welcome to the Data Visualization Platform</h1>
  <h2 style={{textAlign:'center'}}>Empower Your Insights with Interactive Charts and Tables</h2>
</div>

<Footer/>
    </div>
  );
}

export default HomePage;
