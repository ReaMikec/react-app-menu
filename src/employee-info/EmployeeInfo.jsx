import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";
import "../employee-info/EmployeeInfo.css";
import notifications from "../assets/notifications.png";
import Ellipse from "../assets/Ellipse.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import edit from "../assets/edit.png";
import archive from "../assets/archive.png";
import del from "../assets/delete.png";
import arrow from "../assets/arrow.png";
import person1 from "../assets/person1.png";

import ChartTable from "../chart-tables/ChartTable";
import DateChart from "../Diagrams/DateChart";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EmployeeInfo = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedBuild, setSelectedBuild] = useState("");

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
              <img src={arrow} alt="back" className="img-arrow" />
              <Link to="/gradilista">
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
          <div className="top-menu-short">
            <p>Općenito</p>
            <p>Dokumentacija</p>
            <p>Bolovanja i godišnji odmori</p>
          </div>
        </div>
        <hr className="h1" />
      </div>
      <div className="info-container">
        <div>
          <div className="employee-img">
            <img src={person1} alt="person1" />
          </div>
          <div className="employee-info">
            <p id="info">Osnovne informacije</p>
            <p>
              Radno mjesto: <span>Naziv</span>
            </p>
            <p>
              Odjel: <span>Ured</span>
            </p>
            <p>
              Email: <span>pero@gmail.com</span>
            </p>
            <p>
              Telefon: <span>0985463696</span>
            </p>
            <p>
              Mobitel: <span>31 000 Osijek</span>
            </p>
            <p>
              Početak rada: <span>1.1.2023.</span>
            </p>
            <p>
              Završetak rada: <span>-</span>
            </p>
          </div>
        </div>
        <div className="stats-container">
          <div className="stats-report">
            <p>Izvještaj rada korisnika</p>
            <span className="img-bg" style={{ marginLeft: "24px" }}>
              <img src={archive} alt="archive" className="img-overlay" />
            </span>
          </div>
          <div className="stats-inputs">
            <div>
              <p>Gradilište</p>
              <select
                name="item"
                className="stats-input"
                placeholder="Odaberite gradilište"
                onChange={(e) => setSelectedBuild(e.target.value)}
              >
                <option value="">Odaberite gradilište</option>
                <option value="kuća">Kuća</option>
                <option value="režija">Režija</option>
                <option value="fasada">Fasada</option>
                <option value="iskop">Iskop</option>
                <option value="paneli">Paneli</option>
              </select>
            </div>
            <div>
              <p>Unesite datume</p>
              <DatePicker
                placeholderText="24.12.2022 - 30.12.2022"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd.MM.yyyy"
                minDate={new Date(2022, 11, 24)}
                maxDate={new Date(2022, 11, 30)}
                className="stats-input"
              />
            </div>
          </div>
          <DateChart
            selectedDate={selectedDate}
            selectedBuild={selectedBuild}
          />
          <ChartTable />
        </div>
      </div>
    </div>
  );
};

export default EmployeeInfo;
