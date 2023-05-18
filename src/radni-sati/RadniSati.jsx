import React from "react";
import { Link } from "react-router-dom";

import "../radni-sati/RadniSati.css";
import edit from "../assets/edit.png";
import archive from "../assets/archive.png";
import del from "../assets/delete.png";
import arrow from "../assets/arrow.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import notifications from "../assets/notifications.png";
import Ellipse from "../assets/Ellipse.png";
import logo from "../assets/logo.png";
import Search from "../assets/search.png";
import rightArrow from "../assets/right-arrow.jpeg";
import leftArrow from "../assets/left-arrow.jpeg";
import calendarMonth from "../assets/calendar_month.png";
import HoursTable from "../hours-table/HoursTable";

const RadniSati = () => {
  const rows = [
    {
      name: "Peter Thornton",
      value1: 159,
      value2: 6.0,
      value3: 24,
      value4: 4.0,
    },
    {
      name: "Kate Tanner",
      value1: 237,
      value2: 9.0,
      value3: 37,
      value4: 4.3,
    },
    {
      name: "Dori Doreau",
      value1: 262,
      value2: 16.0,
      value3: 24,
      value4: 6.0,
    },
    {
      name: "Ivo Ivić",
      value1: 262,
      value2: 16.0,
      value3: 24,
      value4: 6.0,
    },
    {
      name: "Meri Doreau",
      value1: 262,
      value2: 16.0,
      value3: 24,
      value4: 6.0,
    },
    {
      name: "Fori Ivić",
      value1: 262,
      value2: 16.0,
      value3: 24,
      value4: 6.0,
    },
    {
      name: "Marino Doreau",
      value1: 262,
      value2: 16.0,
      value3: 24,
      value4: 6.0,
    },
    {
      name: "Mila Malić",
      value1: 262,
      value2: 16.0,
      value3: 24,
      value4: 6.0,
    },
    {
      name: "Filip Duvnjak",
      value1: 262,
      value2: 16.0,
      value3: 24,
      value4: 6.0,
    },
    {
      name: "Mirko Maraš",
      value1: 262,
      value2: 16.0,
      value3: 24,
      value4: 6.0,
    },
  ];
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredRows, setFilteredRows] = React.useState(rows);

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchTerm(searchTerm);
    const filteredRows = rows.filter((row) => {
      return row.name.toLowerCase().includes(searchTerm.toLowerCase());
    });

    setFilteredRows(filteredRows);
  };

  return (
    <div>
      <nav className="top-nav1">
        <div className="logo1">
          <img src={logo} alt="Logo" />
        </div>
        <div className="icon1">
          <img src={notifications} alt="" />
          <img src={Ellipse} alt="" className="ellipse" />
          <ProfileDropdown />
        </div>
      </nav>
      <div className="component">
        <div className="header-container">
          <div className="top-header">
            <div className="back-part">
              <Link to="/gradilista">
                <img src={arrow} alt="back" className="img-arrow" />
                <p>povratak na sva gradilista</p>
              </Link>
            </div>
            <div className="img-part" style={{ paddingLeft: "24px" }}>
              <span className="img-bg" style={{ marginLeft: "24px" }}>
                <img src={edit} alt="edit" className="img-overlay" />
              </span>

              <span className="img-bg" style={{ marginLeft: "24px" }}>
                {" "}
                <img src={archive} alt="archive" className="img-overlay" />
              </span>

              <span className="img-bg" style={{ marginLeft: "24px" }}>
                <img src={del} alt="del" className="img-overlay" />
              </span>
            </div>
          </div>
          <div className="bottom-header">
            <h1>Naziv gradilišta</h1>
            <button className="button-active">
              <span>Aktivno</span>
            </button>
          </div>
          <div className="top-menu">
            <p onClick={() => (window.location.href = "/naziv-gradilista")}>
              Općenito
            </p>
            <p onClick={() => (window.location.href = "/RadniZadaci")}>
              Radni zadaci
            </p>
            <p onClick={() => (window.location.href = "/Nacrti")}>Nacrti</p>
            <p onClick={() => (window.location.href = "/Dokumenti")}>
              Dokumenti
            </p>
            <p
              className="radni"
              onClick={() => (window.location.href = "/radni-sati")}
            >
              Radni sati
            </p>
            <p>Materijalni troškovi</p>
            <p>Troškovi koperanata</p>
            <p>Prihodi</p>
          </div>
        </div>
        <hr className="h1" />
      </div>
      <div className="table-box">
        <div className="docs">
          <div className="my-docs">
            <h3>Radni sati</h3>
            <button
              className="button-task1"
              onClick={() => (window.location.href = "/edit-table")}
            >
              Uredi
            </button>
          </div>
          <div className="search-container">
            <div className="search-input-container">
              <input
                className="search-input2"
                placeholder="Pretraga"
                value={searchTerm}
                onChange={handleSearch}
              ></input>
              <img src={Search} alt="search" className="search-icon" />
              <button className="search-button">Pretraži</button>
            </div>
          </div>
        </div>
      </div>
      <div className="date-container">
        <div className="date-box">
          <img id="calendar" src={calendarMonth} alt="calendarMonth" />
          <p>Prosinac 2022</p>
        </div>
        <div>
          <button className="button-task2">Današnji dan</button>
          <img id="arrow" src={leftArrow} alt="leftArrow" />
          <img id="arrow" src={rightArrow} alt="rightArrow" />
        </div>
      </div>
      <HoursTable rows={filteredRows} />
    </div>
  );
};

export default RadniSati;
