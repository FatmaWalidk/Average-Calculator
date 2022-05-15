import React from "react";
import * as XLSX from "xlsx";
import { useState } from "react";
import {
  getFirestore,
  addDoc,
  doc,
  documentId,
  collection,
} from "firebase/firestore";

import { Data } from "./Data";
import "./GetExcel.css";
import excelimg from "./microsoft-excel-spreadsheet-computer-software-power-bi-behind-background-407ac0890c695e4663c28db85a05becd.png";

const GetExcel = () => {
  const [excelFile, setExcelFile] = useState(null);
  const [excelData, setExcelData] = useState(null);
  const [userMessage, setuserMessage] = useState(null);
  const [courseName, setcourseName] = useState("");
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
    setuserMessage(null);
    e.preventDefault();
    if (excelFile !== null) {
      const workbook = XLSX.read(excelFile, { type: "buffer" });
      const worksheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[worksheetName];
      const data = XLSX.utils.sheet_to_json(worksheet);
      setExcelData(data);
      setcourseName(e.target.coursename.value);
      console.log(data);
    } else {
      setExcelData(null);
    }
  };
  const handleUpload = async (e) => {
    setuserMessage(null);
    var total = 0;
    var studentScores = {};

    excelData.forEach((eachData) => {
      studentScores[eachData.stdNo] =
        eachData.A1 * 0.3 + eachData.A2 * 0.3 + eachData.A3 * 0.4;

      total += eachData.A1 * 0.3 + eachData.A2 * 0.3 + eachData.A3 * 0.4;
    });
    try {
      const docRef = await addDoc(collection(getFirestore(), "docs"), {
        avg: (total / excelData.length).toFixed(2),
        courseName: courseName,
        scores: excelData.map((eachData) => ({
          name: eachData.First_Name,
          surname: eachData.Last_Name,
          [eachData.stdNo]:
            eachData.A1 * 0.3 + eachData.A2 * 0.3 + eachData.A3 * 0.4,
        })),
      });
      setuserMessage("successful. Data Uploaded.");
    } catch (e) {
      setuserMessage("OOps.. Something went wrong. " + e.code);
      console.log(e);
    }
  };
  return (
    <div>
      {userMessage && <div className="usermessage">{userMessage}</div>}
      {excelData === null ? (
        <form className="form-group" autoComplete="off" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="coursename">Course name: </label>
            <input type="text" id="coursename" name="coursename" required />
          </div>
          <label htmlFor="excelfile">Your excel file</label>
          <img src={excelimg} width="200" height="200" />
          <br />
          <input
            type="file"
            accept=".xlsx, .xls, .csv"
            id="excelfile"
            onChange={handleFile}
            required
          ></input>
          <br /> <br />
          <button className="button-18" type="submit" id="Submit">
            {" "}
            Submit{" "}
          </button>
        </form>
      ) : (
        <>
          {}
          <Data excelData={excelData} />
          <div>
            <button
              onClick={() => {
                setuserMessage(null);
                setExcelData(null);
                setExcelFile(null);
              }}
              className="button-19"
            >
              Reset
            </button>
            <button onClick={handleUpload} className="button-19 resetbtn">
              Upload
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GetExcel;
