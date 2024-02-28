import React, { useState } from 'react';
import { TextField, Button, Typography, AppBar, CssBaseline, Container, ThemeProvider, createTheme,Link } from '@mui/material';
import { MdEmail, MdLock, MdNaturePeople } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  },
});

const SingUp = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
 

  // form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim()===''){
        alert('please enter your full name')   
    }
    else if(email.trim()===''){
      alert('please provide email')
    }else if(password.trim()===''){
      alert('please create password')
    }

    else{
      localStorage.setItem('name', name);
      localStorage.setItem('email',email)
      localStorage.setItem('password',password)
        alert('Registration & Login Successfully')
        setEmail('')
        setPassword('')
        setName('')
        navigate('/home') 
    }
    
  };

  return (
    <>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs" style={{ marginTop: '50px' }}>
        <AppBar position="static" color="primary" sx={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold' }}>
            USER REGISTRATION
          </Typography>
        </AppBar>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField  name='name' type='text' placeholder='Enter Your Full Name' value={name} onChange={e=>setName(e.target.value)} 
          sx={{ marginY: '20px' }} variant="standard"
           InputProps={{
            startAdornment: (
              <MdNaturePeople style={{ marginRight: '10px', fontSize: '20px', color: 'gray' }} />
            ),
          }}/>
          <TextField
            name="useremail"
            type="email"
            variant="standard"
            placeholder="Enter Username"
            sx={{ marginY: '20px' }}
            value={email}
            onChange={e=> setEmail(e.target.value)}
            InputProps={{
              startAdornment: (
                <MdEmail style={{ marginRight: '10px', fontSize: '20px', color: 'gray' }} />
              ),
            }}
          />
          <TextField
            name="password"
            type="password"
            variant="standard"
            sx={{ marginY: '20px' }}
            placeholder="Enter Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            InputProps={{
              startAdornment: (
                <MdLock style={{ marginRight: '10px', fontSize: '20px', color: 'gray' }} />
              ),
            }}
          />
          <Button type="submit" variant="contained" sx={{ marginY: '20px' }}>
            Submit
          </Button>
        </form>
        <div style={{textAlign:'center',textDecoration:'none'}}>
        <Link style={{textAlign:'center',margin:'auto'}} 
        onClick={()=>{
          navigate('/')
        }}>Already Registered? Login Now</Link>
        </div>
      </Container>
    </ThemeProvider>
    <Footer/>
    </>
  );
};

export default SingUp;
