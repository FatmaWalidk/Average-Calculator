import React from "react";
import * as XLSX from "xlsx";
import { useState } from "react";
import { Data } from "./Data";
import "./GetExcel.css";
import excelimg from "./microsoft-excel-spreadsheet-computer-software-power-bi-behind-background-407ac0890c695e4663c28db85a05becd.png";

const GetExcel = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [excelData, setExcelData] = useState(null);

  const handleFile = (e) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload = (e) => {
        setExcelFile(e.target.result);
      };
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
      console.log(data);
    } else {
      setExcelData(null);
    }
  };

  return (
    <div>
      {excelData === null ? (
        <form className="form-group" autoComplete="off" onSubmit={handleSubmit}>
          <label htmlFor="Your Excel file:"></label>
          <img src={excelimg} width="200" height="200" />
          <br />
          <input
            type="file"
            accept=".xlsx, .xls, .csv"
            id="Your Excel file:"
            onChange={handleFile}
            required
          ></input>
          <br /> <br />
          <button class="button-18" type="submit" id="Submit">
            {" "}
            Submit{" "}
          </button>
        </form>
      ) : (
        <Data excelData={excelData} />
      )}
    </div>
  );
};

export default GetExcel;
