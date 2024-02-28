import React, { useState } from 'react';
import { AppBar, IconButton ,Box, Drawer} from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate ,useLocation} from 'react-router-dom';
import { FaHome, FaChartBar, FaTable, FaSignInAlt, FaSignOutAlt } from 'react-icons/fa'; // Import icons
import logo from './logo.jpg';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = (props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;
  const [mobileopen,setMobileopen]=useState(false)
  const navigate=useNavigate()
  
  const handleLogout = () => {
    navigate('/');
    alert.apply('logout successfully')
};

const handleMenu=()=>{
  setMobileopen(!mobileopen)
}
const drawer=(
<Box
  onClick={handleMenu}
  sx={{
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap:'50px',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',width:'300px',height:'100%'
  }}
>
  <ul style={{ listStyle: 'none', padding: 0 }}>
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaHome style={{ marginRight: '5px',fontSize:'30px'  }} />
      <Link
        to="/home"
        style={{
          textDecoration: 'none',
          color: 'blue',
          marginLeft: '5px',
          transition: 'color 0.3s',fontSize:'20px',fontWeight:'bold'
        }}
      >
        Home
      </Link>
    </li>
    <br/>
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaSignInAlt style={{ marginRight: '5px' ,fontSize:'30px' }} />
      <Link
        to="/entry"
        style={{
          textDecoration: 'none',
          color: 'blue',
          marginLeft: '5px',
          transition: 'color 0.3s',fontSize:'20px',fontWeight:'bold'
        }}
      >
        Entry
      </Link>
    </li>
    <br/>

    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaChartBar style={{ marginRight: '5px',fontSize:'30px'  }} />
      <Link
        to="/chart"
        style={{
          textDecoration: 'none',
          color: 'blue',
          marginLeft: '5px',
          transition: 'color 0.3s',fontSize:'20px',fontWeight:'bold'
        }}
      >
        Chart
      </Link>
    </li>
    <br/>
    
    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaTable style={{ marginRight: '5px',fontSize:'30px'  }} />
      <Link
        to="/table"
        style={{
          textDecoration: 'none',
          color: 'blue',
          marginLeft: '5px',
          transition: 'color 0.3s',fontSize:'20px',fontWeight:'bold'
        }}
      >
        Table
      </Link>
    </li>
    <br/>

    <li style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
      <FaSignOutAlt style={{ marginRight: '5px',fontSize:'30px' }} />
      <Link
        style={{
          textDecoration: 'none',
          color: 'blue',
          marginLeft: '5px',
          transition: 'color 0.3s',fontSize:'20px',fontWeight:'bold'
        }}
        onClick={handleLogout}
      >
        Log Out
      </Link>
    </li>
  </ul>
</Box>
)

const navigationStyle = {
  display: 'none', // hide by default
};
if (window.innerWidth > 742.4) {
  navigationStyle.display = 'block';
  console.log(window.innerWidth)
}

  return (
    <div style={{ marginBottom: '100px', backgroundColor: '#2196f3' }}>
      <AppBar position="static" style={{ backgroundColor: '#2196f3' }}>
        <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
          <img
            src={logo}
            alt={logo}
            style={{ height: '50px', width: '50px', borderRadius: '50%', marginRight: '10px' }}
          />
          <h2 style={{margin:'auto'}}>{props.title}</h2>
          <IconButton color='inherit' aria-label='open-drawer' edge='start' sx={{marginLeft:'auto',display:{sm:"none"}}}
          onClick={handleMenu}>
            <MenuIcon/>
          </IconButton>
          <Box sx={{display:{xs:'none',sm:'block'}}}>
          <div style={{display:'flex',flexDirection:'row',gap:'30px'}}>
      <Link to="/home" style={{ textDecoration: 'none', color: isActive('/home') ? 'green' : 'white' }}>
        <FaHome style={{ marginRight: '5px' }} />
        Home
      </Link>
      <Link to="/entry" style={{ textDecoration: 'none', color: isActive('/entry') ? 'green' : 'white' }}>
        <FaSignInAlt style={{ marginRight: '5px' }} />
        Entry
      </Link>
      <Link to="/chart" style={{ textDecoration: 'none', color: isActive('/chart') ? 'green' : 'white' }}>
        <FaChartBar style={{ marginRight: '5px' }} />
        Chart
      </Link>
      <Link to="/table" style={{ textDecoration: 'none', color: isActive('/table') ? 'green' : 'white' }}>
        <FaTable style={{ marginRight: '5px' }} />
        Table
      </Link>
      <Link to="/" style={{ textDecoration: 'none', color: isActive('/') ? 'green' : 'white' }}>
        <FaSignOutAlt style={{ marginRight: '5px' }} />
        Log Out
      </Link>
    </div>

    </Box>
         </div>
      </AppBar>
      <Box component='nav'>
        <Drawer anchor="left" open={mobileopen} onClose={handleMenu}
        sx={{display:{xs:'block',sm:'none'}}}>
{drawer}
        </Drawer>
      </Box>
    </div>
  );
};

export default Navbar;
