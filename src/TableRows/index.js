import React from 'react';
import "./style.css";

function TableRows(props) {
    return (
        <tbody>
        {}
        {}
        {}
            {props.employees.map((employee) => {
                return(
            
                <tr className="rows" key={employee.dob.date}> 
                    <td><img src={employee.picture.thumbnail} alt={employee.name.first} /></td>
                    <td>{employee.name.first}</td>
                    <td>{employee.name.last}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                </tr>
            ) }
            )}
        </tbody>
    );
}

export default TableRows;