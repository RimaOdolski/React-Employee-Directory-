import React from 'react';
import "./style.css";

function Header(props) {
return (
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4"> Employee Directory</h1>
      <br/>
      {}
      <input 
      className="search" 
      type="text" 
      name="search"
      value={props.search}
      placeholder="Search for Employee"
      onChange={props.searchEmployees}
      />
    </div>
  </div>
)
}

export default Header;