import React, { useEffect, useState } from "react";
import {
  query,
  getFirestore,
  collection,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { async } from "@firebase/util";
import ModalData from "./ModalData";
function History() {
  const [studentData, setstudentData] = useState([]);
  const [showModalData, setshowModalData] = useState(null);
  const getData = async (e) => {
    try {
      const q = query(collection(getFirestore(), "docs"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        console.log(querySnapshot);
        setstudentData(
          querySnapshot.docs.map((eachDoc) => ({
            id: eachDoc.id,
            data: eachDoc.data(),
          }))
        );
      });
    } catch (e) {}
  };
  useEffect(() => {
    getData();
  }, []);

  const deleteData = async (docId) => {
    try {
      if (
        window.confirm("Are you sure you want to delete? this cannot be undone")
      ) {
        await deleteDoc(doc(getFirestore(), "docs", docId));
        alert("Successful");
      }
    } catch (e) {
      alert("OOps.. Something went wrong.\n" + e.code);
      console.log(e);
    }
  };
  return (
    <div>
      <table>
        <caption className="headerDiv">Students Data</caption>
        <thead>
          <tr>
            <th>S. No</th>
            <th>Id</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((eachData, index) => (
            <tr key={eachData}>
              <td>{index + 1}</td>
              <td
                onClick={function () {
                  console.log(eachData);
                  setshowModalData(eachData);
                }}
              >
                {eachData.id}
              </td>
              <td>
                <button
                  onClick={function () {
                    deleteData(eachData.id);
                  }}
                >
                  X
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModalData && (
        <ModalData
          showModalData={showModalData}
          setshowModalData={setshowModalData}
        />
      )}
    </div>
  );
}

export default History;