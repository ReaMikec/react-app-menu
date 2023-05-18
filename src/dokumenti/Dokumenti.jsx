import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import edit from "../assets/edit.png";
import archive from "../assets/archive.png";
import del from "../assets/delete.png";
import arrow from "../assets/arrow.png";
import notifications from "../assets/notifications.png";
import Ellipse from "../assets/Ellipse.png";
import Search from "../assets/search.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import "../dokumenti/Dokumenti.css";
import DocsTable from "../docs-table/DocsTable";

const Dokumenti = () => {
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
          <div className="top-menu3">
            <p onClick={() => (window.location.href = "/naziv-gradilista")}>
              Općenito
            </p>
            <p onClick={() => (window.location.href = "/radni-zadaci")}>
              Radni zadaci
            </p>
            <p onClick={() => (window.location.href = "/nacrti")}>Nacrti</p>
            <p
              className="dokumenti"
              onClick={() => (window.location.href = "/dokumenti")}
            >
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
        <hr className="h1" />
      </div>
      <div className="table-box">
        <div className="docs">
          <div className="my-docs">
            <h3>Moji dokumenti</h3>
            <button
              className="button-task3"
              onClick={() => (window.location.href = "/novo-gradiliste")}
            >
              <span>Novi dokument</span>
            </button>
          </div>
          <div className="search-container">
            <div className="search-input-container">
              <input className="search-input2" placeholder="Pretraga"></input>
              <img src={Search} alt="" className="search-icon" />
              <button className="search-button">Pretraži</button>
            </div>
          </div>
        </div>
        <DocsTable />
      </div>
    </div>
  );
};

export default Dokumenti;
