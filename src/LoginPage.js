import React, { useState } from 'react';
import { TextField, Button, Typography, AppBar, CssBaseline, Container, ThemeProvider, createTheme, Link } from '@mui/material';
import { MdEmail, MdLock } from 'react-icons/md';
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

const LoginPage = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate=useNavigate()
  const username=localStorage.getItem('email') 
  ? localStorage.getItem('email'): 'asif@gmail.com'
  const userPassword=localStorage.getItem('passowrd') ?
  localStorage.getItem('password') : '12345'

  // form handling
  const handleSubmit = (e) => {
    e.preventDefault();
    if(email=== username && password===userPassword){
        alert('login success')
        navigate('/home')
    }else{
        alert('invalid email or password')
    }
  };

  return (
    <>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs" style={{ marginTop: '50px' }}>
        <AppBar position="static" color="primary" sx={{ padding: '20px', textAlign: 'center' }}>
          <Typography variant="h4" sx={{ color: 'white', fontWeight: 'bold' }}>
            USER LOGIN
          </Typography>
        </AppBar>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
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
        <div style={{textAlign:'center'}}>
        <Link style={{textAlign:'center',margin:'auto'}} 
        onClick={()=>{
          navigate('/singup')
        }}>Have You Not Registered? SingUp Now</Link>
        </div>
      </Container>
    </ThemeProvider>
    <Footer/>
    </>
  );
};

export default LoginPage;
