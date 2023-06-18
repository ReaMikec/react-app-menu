import React, { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

import notifications from "../assets/notifications.png";
import Ellipse from "../assets/Ellipse.png";
import arrow from "../assets/arrow.png";

import ProfileDropdown from "../pages/ProfileDropdown";
import edit from "../assets/edit.png";
import archive from "../assets/archive.png";
import del from "../assets/delete.png";
import Search from "../assets/search.png";
import gridView from "../assets/grid_view.png";
import tableChart from "../assets/table_chart.png";

import locationOn from "../assets/locationOn.jpeg";
import "../radni-zadaci/RadniZadaci.scss";
import person from "../assets/person.png";
import event from "../assets/event_available.png";

const RadniZadaci = () => {
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

  return (
    <div className="container-main">
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
      <div className="component">
        <div className="header-container">
          <div className="top-header">
            <div className="back-part2">
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
          <div className="top-menu1">
            <p onClick={() => (window.location.href = "/naziv-gradilista")}>
              Općenito
            </p>
            <p
              className="radni"
              onClick={() => (window.location.href = "/radni-zadaci")}
            >
              Radni zadaci
            </p>
            <p onClick={() => (window.location.href = "/nacrti")}>Nacrti</p>
            <p onClick={() => (window.location.href = "/dokumenti")}>
              Dokumenti
            </p>
            <p onClick={() => (window.location.href = "/radni-sati")}>
              Radni sati
            </p>
            <p>Materijalni troškovi</p>
            <p>Troškovi koperanata</p>
            <p>Prihodi</p>
          </div>
        </div>
      </div>
      <hr className="h1" />
      <div className="work-container">
        <div className="work-tasks-container">
          <div className="container">
            <button
              className="button-new"
              onClick={() => (window.location.href = "/novi-zadatak")}
            >
              Novi zadatak
            </button>
          </div>
          <div className="container1">
            <select name="item" id="item1" placeholder="Status">
              <option value="status">Sort</option>
            </select>
            <div className="search-container1">
              <div className="search-input-container">
                <input className="search-input1" placeholder="Pretraga"></input>
                <img src={Search} alt="" className="search-icon1" />
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
        <div>
          <div className="tasks-priority">
            <button className="priority">
              <span>Najviši prioritet</span>
            </button>
          </div>
        </div>
        <div className="main-container">
          <div className="work-task">
            <div className="task-name">
              <img src={locationOn} alt="" />
              <p>Naziv zadatka</p>
            </div>
            <div className="task-info">
              <button className="created-button">
                <span>Kreiran</span>
              </button>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                illo veritatis aperiam eius assumenda necessitatibus eligendi ad
                amet dignissimos.
              </p>
            </div>
            <div className="deadline">
              <img src={person} alt="" />
              <p>
                <span className="supervisor">Supervizor:</span>
                <span className="ime-supervisor">Matej Pleškov</span>
              </p>
            </div>
            <div className="deadline">
              <img src={event} alt="" />
              <p>
                <span className="term">Rok zadatka:</span>
                <span className="term1">14.10.2022.</span>
              </p>
            </div>
          </div>

          <div className="work-task">
            <div className="task-name">
              <img src={locationOn} alt="" />
              <p>Naziv zadatka</p>
            </div>
            <div className="task-info">
              <button className="wait-button">
                <span>Na čekanju</span>
              </button>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                illo veritatis aperiam eius assumenda necessitatibus eligendi ad
                amet dignissimos.
              </p>
            </div>
            <div className="deadline">
              <img src={person} alt="" />
              <p>
                <span className="supervisor">Supervizor:</span>
                <span className="ime-supervisor">Matej Pleškov</span>
              </p>
            </div>
            <div className="deadline">
              <img src={event} alt="" />
              <p>
                <span className="term">Rok zadatka:</span>
                <span className="term1">14.10.2022.</span>
              </p>
            </div>
          </div>
          <div className="work-task">
            <div className="task-name">
              <img src={locationOn} alt="" />
              <p>Naziv zadatka</p>
            </div>
            <div className="task-info">
              <button className="given-button">
                <span>Dodjeljen</span>
              </button>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                illo veritatis aperiam eius assumenda necessitatibus eligendi ad
                amet dignissimos.
              </p>
            </div>
            <div className="deadline">
              <img src={person} alt="" />
              <p>
                <span className="supervisor">Supervizor:</span>
                <span className="ime-supervisor">Matej Pleškov</span>
              </p>
            </div>
            <div className="deadline">
              <img src={event} alt="" />
              <p>
                <span className="term">Rok zadatka:</span>
                <span className="term1">14.10.2022.</span>
              </p>
            </div>
          </div>
          <div className="work-task">
            <div className="task-name">
              <img src={locationOn} alt="" />
              <p>Naziv zadatka</p>
            </div>
            <div className="task-info">
              <button className="created-button">
                <span>Kreiran</span>
              </button>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                illo veritatis aperiam eius assumenda necessitatibus eligendi ad
                amet dignissimos.
              </p>
            </div>
            <div className="deadline">
              <img src={person} alt="" />
              <p>
                <span className="supervisor">Supervizor:</span>
                <span className="ime-supervisor">Matej Pleškov</span>
              </p>
            </div>
            <div className="deadline">
              <img src={event} alt="" />
              <p>
                <span className="term">Rok zadatka:</span>
                <span className="term1">14.10.2022.</span>
              </p>
            </div>
          </div>
          <div className="work-task">
            <div className="task-name">
              <img src={locationOn} alt="" />
              <p>Naziv zadatka</p>
            </div>
            <div className="task-info">
              <button className="wait-button">
                <span>Na čekanju</span>
              </button>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
                illo veritatis aperiam eius assumenda necessitatibus eligendi ad
                amet dignissimos.
              </p>
            </div>
            <div className="deadline">
              <img src={person} alt="" />
              <p>
                <span className="supervisor">Supervizor:</span>
                <span className="ime-supervisor">Matej Pleškov</span>
              </p>
            </div>
            <div className="deadline">
              <img src={event} alt="" />
              <p>
                <span className="term">Rok zadatka:</span>
                <span className="term1">14.10.2022.</span>
              </p>
            </div>
          </div>
          <button className="high-priority">
            <span>Visoki prioritet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RadniZadaci;
