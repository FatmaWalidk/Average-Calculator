import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import { firebaseApp } from "./lib/firebase";
import "./App.css";
import GetExcel from "./components/GetExcel";
import CalculateAverage from "./components/CalculateAverage";
import History from "./components/History";

function App() {
  return (
    <div className="all">
      <div className="header">
        <h1>
          <a href="/" style={{ color: "white" }}>
            <span style={{ padding: "25px" }}>AVERAGE</span> <br /> CALCULATOR{" "}
          </a>
        </h1>
        <a href="/history" className="howTo">
          History
        </a>
      </div>
      <div className="body">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<GetExcel />} />
            <Route path="/CalculateAverage" element={<CalculateAverage />} />
            <Route path="/History" element={<History />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
