import React from "react";

import logo from "../assets/logo.png";
import "../style/Dokumentacija.css";
import notifications from "../assets/notifications.png";
import Backup from "../assets/backup.png";

import Ellipse from "../assets/Ellipse.png";
import ProfileDropdown from "./ProfileDropdown";

const Dokumentacija = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div>
      <nav className="top-nav1">
        <div className="logo1">
          <img src={logo} alt="Logo" />
        </div>
        <div className="icon1">
          <div className="all">
            <img src={notifications} alt="" className="notifications" />
            <img src={Ellipse} alt="" className="ellipse" />
          </div>
          <ProfileDropdown />
        </div>
      </nav>
      <div className="settings">
        <h2>Novo gradilište</h2>
        <div className="route">
          <div className="route1">
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
      <div className="input-box3-3">
        <div className="inputs2-2">
          <p>Unesite svu potrebnu dokumentaciju za gradilište</p>
          <div className="dotted-box-box">
            <div className="backup-up">
              <div className="backup-img1">
                <img src={Backup} alt="Backup" />
              </div>
            </div>
            <p>
              Drag & drop files or <span>Browse</span>
            </p>
            <p id="id1">Supported formates: JPEG, PNG, Word, PPT</p>
          </div>
          <button className="upload-button1">Upload</button>
        </div>
      </div>
      <div className="input-box2-2">
        <div className="inputs5-5">
          <button className="back1-1" onClick={handleBackClick}>
            Prethodni korak
          </button>
          <button className="save1-1">Spremi i nastavi</button>
          <button className="end1-1">Završi</button>
        </div>
      </div>
    </div>
  );
};

export default Dokumentacija;
