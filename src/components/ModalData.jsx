import React from "react";

function ModalData({ showModalData, setshowModalData }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        zIndex: "10",
        width: "100%",
        position: "fixed",

        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <div style={{ textAlign: "right" }}>
        <span
          style={{ marginLeft: "auto", fontSize: "1.6rem", color: "black" }}
          onClick={function () {
            setshowModalData(null);
          }}
        >
          X
        </span>
      </div>
      <table>
        <caption>
          {showModalData.id} <br />
          Avg: {showModalData.data.avg}
        </caption>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Std No.</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {showModalData.data.scores.map((eachScore, index) => (
            <tr key={Object.keys(eachScore)[0]}>
              <td>{index + 1}</td>
              <td>{Object.keys(eachScore)[0]}</td>
              <td>{eachScore[Object.keys(eachScore)[0]]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ModalData;
