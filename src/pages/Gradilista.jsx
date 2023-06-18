import React from "react";
import { useState } from "react";

import logo from "../assets/logo.png";
import notifications from "../assets/notifications.png";
import Ellipse from "../assets/Ellipse.png";
import Ellipse3 from "../assets/Ellipse3.png";

import Ellipse2 from "../assets/Ellipse2.png";
import eventAvailable from "../assets/event_available.png";
import locationOn from "../assets/location_on.png";

import searchIcon from "../assets/search.png";
import gridView from "../assets/grid_view.png";
import tableChart from "../assets/table_chart.png";
import houseSiding from "../assets/house_siding.png";

import CustomTable from "./CustomTable";
import ProfileDropdown from "./ProfileDropdown";

import "../style/Gradilista.scss";

const Gradilista = () => {
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
    <div className="head">
      <div className="main">
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
        <div className="header">
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
                <img src={searchIcon} alt="" className="search-icon" />
                <button className="search-button">Pretraži</button>
              </div>
            </div>
            <div className="view-type-container">
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
        <div className="content">
          {isGridView ? (
            <div className="grid-container1">
              <div
                className="grid-item grid-item-image my-grid-item"
                onClick={() => (window.location.href = "/naziv-gradilista")}
              >
                <img src={Ellipse2} alt="Ellipse2" className="ellipse2" />
                <div className="button-container">
                  <button className="active-button">
                    <span>Aktivno</span>
                  </button>
                </div>
                <div className="text-container">
                  <p>HEP - sanacija uljne jame TS u Branjinom Vrhu</p>
                </div>
                <div className="text-icon">
                  <div className="text-container1">
                    <p>
                      <img src={eventAvailable} alt="Event Available" />
                      <span className="supervisor">Predviđeni završetak:</span>
                      <span className="date-supervisor">2.11.2022.</span>
                    </p>
                  </div>
                </div>
                <div className="text-container1">
                  <p>
                    {" "}
                    <img src={locationOn} alt="Location On" />
                    <span className="supervisor">Adresa:</span>{" "}
                    <span className="date-supervisor1">
                      Trg kralja Tomislava, <br />{" "}
                      <span className="address">31550, Valpovo</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid-item grid-item-image my-grid-item">
                <div className="house">
                  <img src={houseSiding} alt="houseSiding" />
                </div>
                <div className="button-container">
                  <button className="button1-active-button">
                    <span>U pripremi</span>
                  </button>
                </div>
                <div className="text-container">
                  <p>Obiteljska kuća</p>
                </div>
                <div className="text-icon1">
                  <div className="text-container1">
                    <p>
                      {" "}
                      <img src={eventAvailable} alt="Event Available" />
                      <span className="supervisor">Predviđeni završetak:</span>
                      <span className="date-supervisor">2.11.2023.</span>
                    </p>
                  </div>
                </div>
                <div className="text-container1">
                  <p>
                    <img src={locationOn} alt="Location On" />
                    <span className="supervisor">Adresa:</span>{" "}
                    <span className="date-supervisor1">
                      Trg kralja Tomislava, <br />{" "}
                      <span className="address">31550, Valpovo</span>
                    </span>
                  </p>
                </div>
              </div>

              <div className="grid-item grid-item-image my-grid-item">
                <div className="house">
                  <img src={houseSiding} alt="houseSiding" />
                </div>
                <div className="button-container">
                  <button className="active-button">
                    <span>Aktivno</span>
                  </button>
                </div>

                <div className="text-container">
                  <p>
                    HEP - sanacija uljne jame TS u Branjinom s dugim nazi...
                  </p>
                </div>
                <div className="text-icon">
                  <div className="text-container1">
                    <p>
                      <img src={eventAvailable} alt="Event Available" />
                      <span className="supervisor">Predviđeni završetak:</span>
                      <span className="date-supervisor">2.11.2023.</span>
                    </p>
                  </div>
                </div>
                <div className="text-container1">
                  <p>
                    <img src={locationOn} alt="Location On" />
                    <span className="supervisor">Adresa:</span>{" "}
                    <span className="date-supervisor1">
                      Trg kralja Tomislava, <br />{" "}
                      <span className="address">31550, Valpovo</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid-item grid-item-image my-grid-item">
                <div className="house">
                  <img src={houseSiding} alt="houseSiding" />
                </div>
                <div className="button-container">
                  <button className="button-active-button">
                    <span>Arhiva</span>
                  </button>
                </div>
                <div className="text-container">
                  <p>Sanacija škole</p>
                </div>
                <div className="text-icon1">
                  <div className="text-container1">
                    <p>
                      {" "}
                      <img src={eventAvailable} alt="Event Available" />
                      <span className="supervisor">Predviđeni završetak:</span>
                      <span className="date-supervisor">2.11.2023.</span>
                    </p>
                  </div>
                </div>
                <div className="text-container1">
                  <p>
                    <img src={locationOn} alt="Location On" />
                    <span className="supervisor">Adresa:</span>{" "}
                    <span className="date-supervisor1">
                      Trg kralja Tomislava, <br />{" "}
                      <span className="address">31550, Valpovo</span>
                    </span>
                  </p>
                </div>
              </div>
              <div className="grid-item grid-item-image my-grid-item">
                <img src={Ellipse3} alt="Ellipse3" className="ellipse2" />
                <div className="button-container">
                  <button className="button-active-button">
                    <span>Arhiva</span>
                  </button>
                </div>
                <div className="text-container">
                  <p>Sanacija škole</p>
                </div>
                <div className="text-icon1">
                  <div className="text-container1">
                    <p>
                      {" "}
                      <img src={eventAvailable} alt="Event Available" />
                      <span className="supervisor">Predviđeni završetak:</span>
                      <span className="date-supervisor">2.11.2023.</span>
                    </p>
                  </div>
                </div>
                <div className="text-container1">
                  <p>
                    <img src={locationOn} alt="Location On" />
                    <span className="supervisor">Adresa:</span>{" "}
                    <span className="date-supervisor1">
                      Trg kralja Tomislava, <br />{" "}
                      <span className="address">31550, Valpovo</span>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <CustomTable />
          )}
        </div>
      </div>
    </div>
  );
};

export default Gradilista;
