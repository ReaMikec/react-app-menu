import React, { useState } from "react";
import logo from "../assets/logo.png";
import "../style/VoditeljiIZaposlenici.css";
import notifications from "../assets/notifications.png";
import expandIcon from "../assets/expand_more.png";

import Ellipse from "../assets/Ellipse.png";

import ProfileDropdown from "./ProfileDropdown";

const VoditeljiIZaposlenici = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="div1">
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
      <div className="box">
        <div className="box-1">
          <div className="box-2">
            <p>Voditelj gradilišta</p>
            <div className="dropdown">
              <p>
                Odaberite osobu
                <img src={expandIcon} alt="Expand" className="expand-icon" />
              </p>
            </div>
          </div>
        </div>
        <div className="box-1">
          <div className="box-2">
            <p>Zaposlenici gradilišta</p>
            <div className="dropdown-container">
              <div className="dropdown" onClick={toggleDropdown}>
                <p>
                  Odaberite osobu
                  <img src={expandIcon} alt="Expand" className="expand-icon" />
                </p>
              </div>
              {showDropdown && (
                <div className="dropdown-menu-1">
                  <label>
                    <input type="checkbox" name="osoba1" />
                    Pero Perić
                  </label>
                  <label>
                    <input type="checkbox" name="osoba2" />
                    Marko Marić
                  </label>
                  <label>
                    <input type="checkbox" name="osoba3" />
                    Ivo Ivić
                  </label>
                  <label>
                    <input type="checkbox" name="osoba4" />
                    Stjepan Marić
                  </label>
                  <label>
                    <input type="checkbox" name="osoba4" />
                    Petar Mihaljević
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="all-button">
        <button className="add-button">Dodaj sve zaposlenike</button>
      </div>
      <div className="input-box2">
        <div className="inputs5">
          <button className="back1" onClick={handleBackClick}>
            Prethodni korak
          </button>
          <button
            className="save1"
            onClick={() => (window.location.href = "/dokumentacija")}
          >
            Spremi
          </button>
        </div>
      </div>
    </div>
  );
};
export default VoditeljiIZaposlenici;
