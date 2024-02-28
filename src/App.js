import React from 'react';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import HomePage from './Home';
import EntryPage from './EntryPage';
import LoginPage from './LoginPage'
import ChartPage from './ChartPage';
import TablePage from './Table';
import PageNotFound from './PageNotFound';
import SingUp from './SingUp';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/home" element={<HomePage/>}></Route>
      <Route path="/entry" element={<EntryPage/>}></Route>
      <Route path="/chart" element={<ChartPage/>}></Route>
      <Route path="/table" element={<TablePage/>}></Route>
      <Route path="*" element={<PageNotFound/>}></Route>
      <Route path='singup' element={<SingUp/>}></Route>
      
      </>
          </Routes>
    </BrowserRouter>
  );
}

export default App;