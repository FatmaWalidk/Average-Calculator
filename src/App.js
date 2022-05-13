import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { firebaseApp } from "./lib/firebase";
import "./App.css";
import GetExcel from "./components/GetExcel";
import CalculateAverage from "./components/CalculateAverage";

function App() {
  return (
    <div className="all">
      <div className="header">
        <h1>
          <b>
            <span style={{ padding: "25px" }}>AVERAGE</span> <br /> CALCULATOR{" "}
          </b>
        </h1>
        <div className="howTo">How To Use.</div>
      </div>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetExcel />} />
            <Route path="/CalculateAverage" element={<CalculateAverage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
