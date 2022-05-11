import React from 'react';
import {CalculateAverage} from './CalculateAverage';
import './Data.css'
import './GetExcel.css';

export const Data = ({excelData}) => {
    return(   
        <div> 
            <br/> <br/>
            
            <table>
            <thead> 
                    <tr>
                        <th> First Name </th>
                        <th> Last Name </th> 
                        <th> Assessment 1</th> 
                        <th> Assessments 2</th>
                        <th> Assessments 3</th>
                        <th> Class Average </th> 
                    </tr>
                </thead>
                <tbody>
                    {excelData.map((data)=>(<tr key={data.ID}><CalculateAverage FN={data.First_Name} LN={data.Last_Name} A1={data.A1} A2={data.A2} A3={data.A3}/></tr>))}
                </tbody>
            </table>
        </div>
    )
}
 
