import React, {Component} from "react";
import Header from "./components/Header";
import TableHeadings from "./components/TableHead";
import EmployeeRows from "./components/TableRows";
import Footer from "./components/Footer";
import Employees from "./employees.json";

class App extends Component {
  state = {
    Employees: Employees.results,
    originalList: Employees.results,
    search: "",
    sortType:"ascending"
  };


  searchEmployees = event => {
    const {name, value } = event.target
    this.setState({
      [name]: value
    })
    let newEmployee = this.state.originalList.filter(employee=>{
      return employee.name.first.toLowerCase().indexOf(value.toLowerCase()) > -1 || employee.name.last.toLowerCase().indexOf(value.toLowerCase()) > -1 
    })
    this.setState({
      Employees: newEmployee
    })
};



  ascending = (columnName) => {
    console.log(this.state.employees);

    let newEmployees;
    if (this.state.sortType === "ascending") {
      newEmployees = this.state.Employees.sort((a, b) => a.name[columnName].localeCompare(b.name[columnName]));
      this.setState({
        Employees: newEmployees,
        sortType: "descending"
      })
    } else {
      newEmployees = this.state.Employees.sort((a, b) => b.name[columnName].localeCompare(a.name[columnName]));
      this.setState({
        Employees: newEmployees,
        sortType: "ascending"
      })
    }
  }


  render() {
    return (
      <div>
        <Header
          search={this.state.search}
          searchEmployees={this.searchEmployees}
        />
        <table className="table table-striped">
          {/* using the ascending from state */}
          <TableHeadings
          ascending={this.ascending}
          />
          <EmployeeRows 
          employees={this.state.Employees}
          />
        </table>
        <Footer />
      </div>
    )
  }
}
export default App;