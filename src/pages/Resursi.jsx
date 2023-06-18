import React from "react";

import logo from "../assets/logo.png";
import "../style/Resursi.scss";
import notifications from "../assets/notifications.png";
import Ellipse from "../assets/Ellipse.png";
import expandIcon from "../assets/expand_more.png";

import CheckboxGrid from "../checkbox/CheckboxGrid";
import ProfileDropdown from "./ProfileDropdown";

const Resursi = () => {
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
      <div className="settings">
        <h2>Postavke</h2>
        <div className="links">
          <div className="links1">
            <p id="rights">Grupe prava</p>
            <p>Odjeli</p>
            <p>Pracenje resursa</p>
          </div>
        </div>
        <div className="input-container">
          <h3>Odaberite korisnika:</h3>
          <div className="input-wrapper">
            <input type="text" placeholder="Admin" />
            <img src={expandIcon} alt="Expand" />
          </div>
        </div>
        <div className="input-container">
          <h3>Odaberite modul:</h3>
          <div className="input-wrapper">
            <input type="text" placeholder="Gradilišta" />
            <img src={expandIcon} alt="Expand" />
          </div>
        </div>

        <button className="submit-button">Primjeni</button>
        <div className="checkbox-grid-container">
          <CheckboxGrid />
          <div className="grid-bttn">
            <button className="save-button">Spremi izmjene</button>
            <button className="quit-button">Odustani</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resursi;
