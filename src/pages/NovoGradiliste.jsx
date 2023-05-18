import React, { useState } from "react";
import { TextField } from "@mui/material";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import logo from "../assets/logo.png";
import "../style/NovoGradiliste.css";
import notifications from "../assets/notifications.png";

import Ellipse from "../assets/Ellipse.png";
import Backup from "../assets/backup.png";

import ProfileDropdown from "./ProfileDropdown";

const NovoGradiliste = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  const [value, setValue] = useState(null);

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
      <div className="settings">
        <h2>Novo gradilište</h2>
        <div className="route">
          <div className="route1 ">
            <p>
              <span className="number">1</span> Osnovni podaci
            </p>
            <hr className="hr" />
            <p>
              <span className="number">2</span> Voditelji i zaposlenici
            </p>
            <hr className="hr" />
            <p>
              <span className="number">3</span> Dokumentacija
            </p>
            <hr className="hr" />
            <p>
              <span className="number">4</span> Nacrti
            </p>
          </div>
        </div>
        <hr className="h" />
      </div>
      <div className="input-box">
        <div className="input-box1">
          <div className="inputs">
            <p>Naziv*</p>
            <input type="text" placeholder="Unesite naziv gradilišta..." />
            <p>Investitor*</p>
            <input type="text" placeholder="Unesite naziv investitora" />
            <p>Broj/Oznaka*</p>
            <input type="text" placeholder="Unesite oznaku projekta" />
          </div>
          <div className="input-box2">
            <div className="inputs1">
              <div className="first">
                <p>Početak projekta*</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={value}
                    onChange={(newValue) => setValue(newValue)}
                    renderInput={(props) => <TextField {...props} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="first1">
                <p>Završetak projekta*</p>
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
          <div className="input-box4">
            <div className="inputs3">
              <p>Adresa</p>
              <input type="text" placeholder="Unesite adresu gradilišta..." />
              <p>Grad i poštanski broj</p>
              <input type="text" placeholder="Unesite Grad i poštanski broj" />
              <p>Država</p>
              <input type="text" placeholder="Unesite naziv države" />
              <p>Ugovorena vrijednost</p>
              <input
                type="text"
                placeholder="Unesite iznos ugovorene vrijednosti"
              />
              <p>Valuta</p>
              <input type="text" placeholder="Unesite valutu" />
              <p>Web stranica</p>
              <input type="text" placeholder="Unesite adresu stranice" />
              <p>Opis projekta</p>
              <input
                type="text"
                id="last"
                placeholder="Unesite opis projekta"
              />
            </div>
          </div>
          <div className="input-box5">
            <div className="inputs4">
              <button className="back" onClick={handleBackClick}>
                Natrag
              </button>
              <button
                className="save"
                onClick={() =>
                  (window.location.href = "/voditelji-i-zaposlenici")
                }
              >
                Spremi
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NovoGradiliste;
