import React from "react";
import { useState } from "react";
import EmployeeBox from "../employee-box/EmployeeBox";
import CustomTable from "./CustomTable";
import logo from "../assets/logo.png";
import notifications from "../assets/notifications.png";
import Ellipse from "../assets/Ellipse.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import Search from "../assets/search.png";
import gridView from "../assets/grid_view.png";
import tableChart from "../assets/table_chart.png";

import TablePagination from "@mui/material/TablePagination";

import "../style/Zaposlenici.scss";

const Zaposlenici = () => {
  const [isGridView, setIsGridView] = useState(true);
  const [isTableView, setIsTableView] = useState(false);

  const handleGridViewClick = () => {
    setIsGridView(true);
    setIsTableView(false);
  };

  const handleTableViewClick = () => {
    setIsTableView(true);
    setIsGridView(false);
  };

  const employees = [
    {
      name: "Mario Martić",
      position: "Pozicija 1",
      department: "Odjel 1",
      phone: "2123456",
      email: "mario.martic@gmail.com",
    },
    {
      name: "Mario Perić",
      position: "Pozicija 2",
      department: "Odjel 2",
      phone: "2123456",
      email: "mario.peric@gmail.com",
    },
    {
      name: "Ivo Armić",
      position: "Pozicija 3",
      department: "Odjel 3",
      phone: "2123456",
      email: "ivo.armic@gmail.com",
    },
    {
      name: "Ivana Perić",
      position: "Pozicija 4",
      department: "Odjel 4",
      phone: "2123456",
      email: "ivana.peric@gmail.com",
    },
  ];

  const repeatedEmployees = Array.from(
    { length: 16 },
    (_, index) => employees[index % employees.length]
  );

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <nav className="top-nav2">
        <div className="logo1">
          <img src={logo} alt="Logo" />
        </div>
        <div className="icon1">
          <img src={notifications} alt="" />
          <img src={Ellipse} alt="" className="ellipse" />
          <ProfileDropdown />
        </div>
      </nav>
      <div className="header1">
        <div className="container3">
          <h1>Moja gradilišta</h1>
          <button
            className="button"
            onClick={() => (window.location.href = "/novo-gradiliste")}
          >
            Novo gradilište
          </button>
        </div>
        <div className="container3">
          <select name="item" id="item" placeholder="Status">
            <option value="status">Status</option>
          </select>
          <div className="search-container">
            <div className="search-input-container">
              <input className="search-input" placeholder="Pretraga"></input>
              <img src={Search} alt="" className="search-icon" />
              <button className="search-button">Pretraži</button>
            </div>
          </div>
          <div className="view-type-container1">
            <button
              onClick={handleGridViewClick}
              className={`grid-view ${
                isGridView ? "active-view custom-grid-view" : ""
              }`}
            >
              {isGridView ? (
                <img src={gridView} alt="" />
              ) : (
                <img src={gridView} alt="" />
              )}
            </button>
            <button
              onClick={handleTableViewClick}
              className={`table-view ${
                isTableView ? "active-view custom-table-view" : ""
              }`}
            >
              {isTableView ? (
                <img src={tableChart} alt="" />
              ) : (
                <img src={tableChart} alt="" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isTableView ? (
        <CustomTable employees={repeatedEmployees} />
      ) : (
        <div
          className="grid_container"
          onClick={() => (window.location.href = "/employee-info")}
        >
          {repeatedEmployees
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

            .map((employee, index) => (
              <EmployeeBox
                key={index}
                name={employee.name}
                position={employee.position}
                department={employee.department}
                phone={employee.phone}
                email={employee.email}
                image={employee.image}
              />
            ))}
        </div>
      )}
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={repeatedEmployees.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default Zaposlenici;
