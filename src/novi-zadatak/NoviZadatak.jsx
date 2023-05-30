import React, { useState } from "react";
import { MapInteractionCSS } from "react-map-interaction";

import { TextField } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import logo from "../assets/logo.png";
import "../novi-zadatak/NoviZadatak.css";
import notifications from "../assets/notifications.png";

import Ellipse from "../assets/Ellipse.png";
import Backup from "../assets/backup.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import arrow from "../assets/arrow.png";
import groundPlan from "../assets/groundPlan1.jpg";
import screen from "../assets/screen.png";
import locationOn from "../assets/locationOn.jpeg";
import LocationModal from "../location-modal/LocationModal";

const NoviZadatak = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  const [scale, setScale] = useState(1);

  const handleZoomInClick = () => {
    setScale((scale) => scale + 0.1);
  };

  const handleZoomOutClick = () => {
    setScale((scale) => scale - 0.1);
  };
  const handleFullScreenClick = () => {
    const elem = document.querySelector(".zoom-container");
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  };
  const [value, setValue] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
      <div className="settings1">
        <div className="back-box">
          <img src={arrow} alt="back" className="img-arrow" />
          <p onClick={handleBackClick}>povratak na radne zadatke</p>
        </div>
        <h2>Novi zadatak</h2>
      </div>
      <hr className="h" />
      <div className="input-box-main">
        <div className="input-box-inputs">
          <div className="input_box1">
            <div className="inputs">
              <p>Naslov zadatka</p>
              <input type="text" placeholder="Unesite naslov zadatka..." />
              <p>Opis zadatka</p>
              <input type="text" id="last" placeholder="Unesite opis" />
            </div>
            <div className="input-box2">
              <div className="inputs1">
                <div className="first">
                  <p>Početak zadatka</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      renderInput={(props) => <TextField {...props} />}
                    />
                  </LocalizationProvider>
                </div>
                <div className="first1">
                  <p>Završetak zadatka</p>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      renderInput={(props) => <TextField {...props} />}
                    />
                  </LocalizationProvider>
                </div>
              </div>
            </div>
            <div className="input-box4">
              <div className="inputs3">
                <p>Zaposlenici gradilišta</p>
                <select name="item" id="persons" placeholder="Status">
                  <option value="status">Kreiran</option>
                </select>
                <p>Razina hitnosti</p>
                <select name="item" id="persons" placeholder="Status">
                  <option value="status">Vrlo niska hitnost</option>
                </select>
                <p>Status zadatka</p>
                <select name="item" id="persons" placeholder="Status">
                  <option value="status">Kreiran</option>
                </select>
                <p>Nacrt</p>
                <select name="item" id="persons" placeholder="Status">
                  <option value="status">Naziv tlocrta</option>
                </select>
              </div>
            </div>
            <div className="input-box3">
              <div className="inputs2">
                <p>Profilna slika gradilišta</p>
                <div className="dotted-box">
                  <div className="backup">
                    <div className="backup-img">
                      <img src={Backup} alt="Backup" />
                    </div>
                  </div>
                  <p>
                    Drag & drop files or <span>Browse</span>
                  </p>
                  <p id="id">Supported formates: JPEG, PNG, Word, PPT</p>
                </div>
                <button className="upload-button">Upload</button>
              </div>
            </div>
            <div className="input-box5">
              <div className="inputs4">
                <button className="back" onClick={handleBackClick}>
                  Natrag
                </button>
                <button
                  className="save"
                  onClick={() => (window.location.href = "/Zadatak")}
                >
                  Spremi
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="project">
          <div className="zoom-container">
            <div className="zoom-img">
              <button className="plus" onClick={handleZoomInClick}>
                <strong>+</strong>
              </button>
              <button className="minus" onClick={handleZoomOutClick}>
                <strong>-</strong>
              </button>
              <div className="full">
                <button id="fullscreen" onClick={handleFullScreenClick}>
                  <img src={screen} alt="screen"></img>
                </button>
              </div>
              <MapInteractionCSS>
                <div className="zoom-img3">
                  <img
                    src={groundPlan}
                    alt="Ground Plan"
                    style={{
                      transform: `scale(${scale})`,
                      margin: "20px 120px",
                      width: "600px",
                      height: "460px",
                    }}
                  />
                  <div className="location-wrapper">
                    <div className="title_overlay">
                      <button
                        className="location-on-button"
                        onClick={openModal}
                      >
                        <img
                          src={locationOn}
                          alt="Location On"
                          id="location_on2"
                        />
                      </button>
                    </div>
                  </div>
                </div>
                {isModalOpen && <LocationModal closeModal={closeModal} />}
              </MapInteractionCSS>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoviZadatak;
