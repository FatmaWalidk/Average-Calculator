import React, { useEffect, useState } from "react";
import { CalculateAverage } from "./CalculateAverage";
import "./Data.css";
import "./GetExcel.css";

export const Data = ({ excelData }) => {
  const [classAverage, setclassAverage] = useState("0");
  useEffect(() => {
    var total = 0;
    excelData.forEach(
      (eachData) =>
        (total += eachData.A1 * 0.3 + eachData.A2 * 0.3 + eachData.A3 * 0.4)
    );
    setclassAverage((total / excelData.length).toFixed(2));
  }, [excelData]);

  return (
    <div>
      <br /> <br />
      <table>
        <caption>Class average: {classAverage}</caption>
        <thead>
          <tr>
            <th> Student Number </th>
            <th> First Name </th>
            <th> Last Name </th>
            <th> Assessment 1</th>
            <th> Assessments 2</th>
            <th> Assessments 3</th>
            <th> Total</th>
          </tr>
        </thead>
        <tbody>
          {excelData.map((data) => (
            <tr key={data.ID}>
              <CalculateAverage
                FN={data.First_Name}
                LN={data.Last_Name}
                A1={data.A1}
                A2={data.A2}
                A3={data.A3}
                stdNo={data.stdNo}
              />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
