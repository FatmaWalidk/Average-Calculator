import readXlsxFile from 'read-excel-file'
import React from 'react'

const GetExcel = () => {

 
    return ( <div> 
        <h1>Average Calculator</h1> 
        <label htmlFor="Your Excel file:">Your Excel file:</label>
        <input type="file" accept=".xlsx, .xls, .csv" id="Your Excel file:"/> 
        <button id="Submit"> Submit </button>
    
    </div> );
}
 
export default GetExcel;