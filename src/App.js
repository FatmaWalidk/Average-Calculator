import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GetExcel from './components/GetExcel';
import CalculateAverage from './components/CalculateAverage';

function App() {
  return (
    <div className='all'>
      <h1 className='header' > <b><span style={{padding:"25px"}}>AVERAGE</span>  <br/> CALCULATOR </b></h1> 
     <div className="body" >
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetExcel/> }/>
          <Route path='/CalculateAverage' element={<CalculateAverage/>}/>
        </Routes>
      </BrowserRouter>
      </div>
    </div>
      
  );
}

export default App;
