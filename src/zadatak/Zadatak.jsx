import arrow from "../assets/arrow.png";
import redHouse from "../assets/red-house.png";
import simpleHouse from "../assets/simple-house.png";
import React from "react";
import "../zadatak/Zadatak.css";
import logo from "../assets/logo.png";
import notifications from "../assets/notifications.png";
import Ellipse from "../assets/Ellipse.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import male from "../assets/male.png";
import female from "../assets/female.png";
import RectangleO from "../assets/RectangleO.png";
import RectangleW from "../assets/RectangleW.png";
import addphoto from "../assets/addphoto.png";
import send from "../assets/send.png";

const Zadatak = () => {
  const handleBackClick = () => {
    window.history.back();
  };
  return (
    <div className="top-container">
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
      <div className="settings2">
        <div className="back-part1">
          <img src={arrow} alt="back" className="img-arrow" />
          <p onClick={handleBackClick}>povratak na zadatke</p>
          <h2>Lorem ipsum</h2>
        </div>
        <div className="button-div">
          <button className="button-created">
            <span>Kreiran</span>
          </button>
          <button className="button-wait">
            <span>Srednji prioritet</span>
          </button>
        </div>
      </div>
      <hr className="h" />
      <div className="task-chat">
        <div className="task-basic-info">
          <div className="basic-info">
            <p id="info">Osnovne informacije</p>
            <p>
              Broj/Oznaka:{" "}
              <span>
                <span>1 radovi</span>
              </span>
            </p>
            <p>
              Početak projekta:{" "}
              <span>
                <span>05.12.2022.</span>
              </span>
            </p>
            <p>
              Predviđeni završetak:{" "}
              <span>
                <span>13.01.2024.</span>
              </span>
            </p>
            <p>
              Adresa:{" "}
              <span>
                <span>Ulica 21</span>
              </span>
            </p>
            <p>
              Poštanski broj:{" "}
              <span>
                <span>10 000 Zagreb</span>
              </span>
            </p>
            <p>
              Država:{" "}
              <span>
                <span>Hrvatska</span>
              </span>
            </p>
            <p>
              web stranica: <span>-</span>
            </p>
          </div>
          <div className="basic-info1">
            <p id="info">Opis zadatka</p>
            <p id="info2">
              Angažirati stolara za izradu polukružnih ruku tako da ih <br />
              dostavi na vrijeme. Ne smiju kasniti.
            </p>
          </div>
          <div className="basic-info2">
            <p>Privici</p>
            <div className="house-box">
              <img src={redHouse} alt="redhouse" />
              <img src={simpleHouse} alt="simplehouse" />
            </div>
          </div>
        </div>
        <div className="chat-container">
          <div className="chat-box">
            <p id="info">Komentari</p>
            <div className="male-chat">
              <div className="male-img">
                <img src={male} alt="male" />
              </div>
              <div className="male-message">
                <p id="how">How are you?</p>
                <img src={RectangleW} alt="rectangleW" />
                <p id="am">Josip Horvat - Today, 9.30am</p>
              </div>
            </div>
            <div className="female-chat">
              <div className="female-message">
                <p id="fine">Fine. How about you?</p>
                <img src={RectangleO} alt="rectangleO" />
                <p id="pm">Ivanka Jovanković - Today, 1.30pm</p>
              </div>
              <div className="female-img">
                <img src={female} alt="female" />
              </div>
            </div>
          </div>
          <div className="comment-box">
            <div className="comment-icons">
              <img src={addphoto} alt="addphoto" id="addphoto" />
              <img src={send} alt="send" id="send" />
            </div>
            <div className="end-input">
              <input
                type="text"
                id="name"
                placeholder="Unesite tekst komentara"
              ></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Zadatak;
