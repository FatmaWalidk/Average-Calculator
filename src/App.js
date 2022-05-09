import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetExcel from './components/GetExcel';
import CalculateAverage from './components/CalculateAverage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<GetExcel/> }/>
        <Route path='/CalculateAverage' element={<CalculateAverage/>}/>
      </Routes>
    </BrowserRouter>
      
  );
}

export default App;
