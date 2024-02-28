import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import Navbar from './Navbar';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const EntryPage = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [city, setCity] = useState('');
  const [salary, setSalary] = useState('');
  const [job, setJob] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '') {
      alert('Name is Required');
    } else if (job.trim() === '') {
      alert('Job is required');
    } else if (age.trim() === '') {
      alert('Age is Required');
    } else if (city.trim() === '') {
      alert('City is required');
    } else if (salary.trim() === '') {
      alert('Salary is required');
    } else {
      const entryKey = `entry_${new Date().getTime()}`;
      const entryData = {
        name,
        age,
        salary,
        city,
        job,
      };

      localStorage.setItem(entryKey, JSON.stringify(entryData));

      setName('');
      setSalary('');
      setAge('');
      setCity('');
      setJob('');

      alert('Data is saved');
    }
  };

  const entryPageStyles = {
    maxWidth: '600px',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  };

  return (
    <>
      <Navbar title='Entry Page' />
      <div style={entryPageStyles}>
        <form onSubmit={handleSubmit} style={formStyles}>
          <TextField name="name" label="Name" value={name} onChange={(e) => setName(e.target.value)} InputProps={{ startAdornment: <PersonIcon /> }} />
          <TextField name="job" label="Job" value={job} onChange={(e) => setJob(e.target.value)} InputProps={{ startAdornment: <WorkIcon /> }} />
          <TextField name="age" label="Age" type="number" value={age} onChange={(e) => setAge(e.target.value)} InputProps={{ startAdornment: <CakeIcon /> }} />
          <TextField name="city" label="City" value={city} onChange={(e) => setCity(e.target.value)} InputProps={{ startAdornment: <LocationOnIcon /> }} />
          <TextField name="salary" label="Salary" type="number" value={salary} onChange={(e) => setSalary(e.target.value)} InputProps={{ startAdornment: <AttachMoneyIcon /> }} />

          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </div>
    </>
  );
};

export default EntryPage;
