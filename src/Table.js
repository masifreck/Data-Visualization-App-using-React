import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import FaceIcon from '@mui/icons-material/Face';
import WorkIcon from '@mui/icons-material/Work';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Navbar from './Navbar';

const TablePage = () => {
  const [dataSets, setDataSets] = useState([]);
  const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);
  const [selectedDataSet, setSelectedDataSet] = useState(null);
  const [editedData, setEditedData] = useState({
    name: '',
    job: '',
    age: '',
    city: '',
    salary: '',
  });

  useEffect(() => {
    fetchDataSets();
  }, []);

  const fetchDataSets = () => {
    const keys = Object.keys(localStorage);
    const sets = keys.filter((key) => key.startsWith('entry_')).map((key) => ({ key, ...JSON.parse(localStorage.getItem(key)) }));
    setDataSets(sets);
  };

  const handleDelete = () => {
    if (selectedDataSet) {
      const { key } = selectedDataSet;
      localStorage.removeItem(key);
      fetchDataSets(); // Update dataSets after deletion
    }
    setDeleteConfirmationOpen(false);
    setSelectedDataSet(null);
  };

  const handleEdit = () => {
    if (selectedDataSet) {
      const { key } = selectedDataSet;
      localStorage.setItem(key, JSON.stringify(editedData));
      fetchDataSets(); // Update dataSets after editing
    }
    setDeleteConfirmationOpen(false);
    setSelectedDataSet(null);
  };

  const handleEditOpen = (dataSet) => {
    setSelectedDataSet(dataSet);
    setEditedData({
      name: dataSet.name || '',
      job: dataSet.job || '',
      age: dataSet.age || '',
      city: dataSet.city || '',
      salary: dataSet.salary || '',
    });
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const formStyles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    margin: '10px',
  };

  return (
    <>
      <Navbar title="Table Page" />
      <TableContainer component={Paper} style={{ margin: '10px', maxWidth: '100%', overflowX: 'auto' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={tableHeaderCellStyle}><FaceIcon style={iconStyle} /> Name</TableCell>
              <TableCell style={tableHeaderCellStyle}><WorkIcon style={iconStyle} /> Job</TableCell>
              <TableCell style={tableHeaderCellStyle}><AccessTimeIcon style={iconStyle} /> Age</TableCell>
              <TableCell style={tableHeaderCellStyle}><LocationOnIcon style={iconStyle} /> City</TableCell>
              <TableCell style={tableHeaderCellStyle}><AttachMoneyIcon style={iconStyle} /> Salary</TableCell>
              <TableCell style={tableHeaderCellStyle}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataSets.map((dataSet) => (
              <TableRow key={dataSet.key}>
                <TableCell>{dataSet.name || 'NA'}</TableCell>
                <TableCell>{dataSet.job || 'NA'}</TableCell>
                <TableCell>{dataSet.age || 'NA'}</TableCell>
                <TableCell>{dataSet.city || 'NA'}</TableCell>
                <TableCell>{dataSet.salary || 'NA'}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditOpen(dataSet)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => { setSelectedDataSet(dataSet); setDeleteConfirmationOpen(true); }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteConfirmationOpen} onClose={() => setDeleteConfirmationOpen(false)}>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this data set?
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteConfirmationOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleDelete} color="primary">
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={!!selectedDataSet} onClose={() => setSelectedDataSet(null)}>
        <DialogTitle>Edit Data Set</DialogTitle>
        <DialogContent>
          <form style={formStyles}>
            <TextField name="name" label="Name" value={editedData.name} onChange={handleEditInputChange} fullWidth />
            <TextField name="job" label="Job" value={editedData.job} onChange={handleEditInputChange} fullWidth />
            <TextField name="age" label="Age" value={editedData.age} onChange={handleEditInputChange} fullWidth />
            <TextField name="city" label="City" value={editedData.city} onChange={handleEditInputChange} fullWidth />
            <TextField name="salary" label="Salary" value={editedData.salary} onChange={handleEditInputChange} fullWidth />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedDataSet(null)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleEdit} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const iconStyle = {
  marginRight: '5px',
};

const tableHeaderCellStyle = {
  fontWeight: 'bold',
  fontSize: '16px',
};

export default TablePage;
