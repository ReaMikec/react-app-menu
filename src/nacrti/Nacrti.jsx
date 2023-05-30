import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapInteractionCSS } from "react-map-interaction";
import logo from "../assets/logo.png";
import edit from "../assets/edit.png";
import archive from "../assets/archive.png";
import del from "../assets/delete.png";
import arrow from "../assets/arrow.png";
import "../nacrti/Nacrti.css";
import notifications from "../assets/notifications.png";
import Ellipse from "../assets/Ellipse.png";
import ProfileDropdown from "../pages/ProfileDropdown";
import rect1 from "../assets/rect1.png";
import rect2 from "../assets/rect2.png";
import rect3 from "../assets/rect3.png";
import screen from "../assets/screen.png";
import groundPlan from "../assets/groundPlan1.jpg";
import locationOn from "../assets/locationOn.jpeg";
import LocationModal from "../location-modal/LocationModal";

const Nacrti = () => {
  const [scale, setScale] = useState(1);

  const handleZoomInClick = () => {
    setScale((scale) => scale + 0.1);
  };

  const handleZoomOutClick = () => {
    setScale((scale) => scale - 0.1);
  };
  const [isFullscreen] = useState(false);

  const handleFullScreenClick = () => {
    const elem = document.querySelector(".zoom-img3 img");
    if (!isFullscreen) {
      if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) {
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
      }
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="drafts-container">
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
          <div className="top-menu2">
            <p onClick={() => (window.location.href = "/naziv-gradilista")}>
              Općenito
            </p>
            <p onClick={() => (window.location.href = "/radni-zadaci")}>
              Radni zadaci
            </p>
            <p
              className="nacrti"
              onClick={() => (window.location.href = "/nacrti")}
            >
              Nacrti
            </p>
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
        <hr className="h1" />
      </div>
      <div className="ground-plan-container">
        <div className="ground-plan-content">
          <h2>Sadržaj</h2>
          <div className="ground-plan-short">
            <p>1_TLOCRT TEMELJA</p>
            <img src={rect1} alt="rect1" />
          </div>
          <div className="ground-plan-short">
            <p>1_TLOCRT PRIZEMLJA</p>
            <img src={rect2} alt="rect2" />
          </div>
          <div className="ground-plan-long">
            <p id="longer">1_TLOCRT MALO DUŽI NAZIV NACRTA 123</p>
            <img src={rect3} alt="rect3" />
          </div>
        </div>
        <div id="new-task1">
          <button
            className="button-task"
            onClick={() => (window.location.href = "NoviZadatak")}
          >
            Novi Zadatak
          </button>
        </div>

        <div className="project1">
          <div className="zoom-container1">
            <div className="zoom-img2">
              <div id="zoom-bttn">
                <button className="plus1" onClick={handleZoomInClick}>
                  <strong>+</strong>
                </button>
                <button className="minus1" onClick={handleZoomOutClick}>
                  <strong>-</strong>
                </button>
                <div className="full1">
                  <button id="fullscreen1" onClick={handleFullScreenClick}>
                    <img src={screen} alt="screen"></img>
                  </button>
                </div>
              </div>
              <div className="zoom-img-container">
                <MapInteractionCSS>
                  <div className="zoom-img3">
                    <img
                      src={groundPlan}
                      alt="Ground Plan"
                      style={{
                        transform: `scale(${scale})`,
                        margin: "10px 70px",
                        width: "800px",
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
    </div>
  );
};

export default Nacrti;
