import React from 'react'

export const CalculateAverage = ({FN, LN, A1, A2, A3}) => {
    return (
    <>
        <td>{FN}</td>
        <td>{LN}</td>
        <td>{A1}</td>
        <td>{A2}</td>
        <td>{A3}</td>
        <td data-testid="Class Average">{((A1*0.3)+(A2*0.3)+(A3*0.4)).toLocaleString(undefined, {maximumFractionDigits:2}) }</td>
    </>
    );
}
 
export default CalculateAverage;