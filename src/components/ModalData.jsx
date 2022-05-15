import React from "react";
import "./ModalData.css";
function ModalData({ showModalData, setshowModalData }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        zIndex: "10",
        width: "fit-content",
        position: "fixed",
        padding: "5px",

        borderRadius: "5px",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div style={{ textAlign: "right" }}>
        <span
          className="cancelBtn"
          onClick={function () {
            setshowModalData(null);
          }}
        >
          X
        </span>
      </div>
      <table>
        <caption>
          {showModalData.data.courseName} <br />
          Avg: {showModalData.data.avg}
        </caption>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Std No.</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody style={{ maxHeigth: "500px", overflowY: "scroll" }}>
          {showModalData.data.scores.map((eachScore, index) => (
            <tr key={Object.keys(eachScore)[0]}>
              <td>{index + 1}</td>
              <td>{Object.keys(eachScore)[0]}</td>
              <td>{eachScore["name"]}</td>
              <td>{eachScore["surname"]}</td>
              <td>{eachScore[Object.keys(eachScore)[0]].toFixed(3)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ModalData;
