import React from "react";

import { MapInteractionCSS } from "react-map-interaction";

import person from "../assets/person.png";
import CalendarMonth from "../assets/calendar_month.png";
import event from "../assets/event.png";
import note from "../assets/note.png";
import close from "../assets/close.png";

import "../location-modal/LocationModal.css";

const LocationModal = ({ closeModal }) => {
  return (
    <div className="modal-container location-modal-fixed">
      <div className="modal">
        <div className="button_close">
          <div>
            <p id="modal_name">Naziv zadatka </p>
          </div>
          <div>
            <button onClick={closeModal}>
              <img src={close} alt="close" />
            </button>
          </div>
        </div>
        <div className="modal1">
          <button id="modal_button">
            <span>vrlo niska hitnost</span>
          </button>
          <p>
            <img src={person} alt="person" id="icon_location" />
            Supervizor: <strong>Matej Pleškov</strong>
          </p>
          <p>
            <img src={CalendarMonth} alt="month" id="icon_location" />
            Kreiran zadatak: <strong>14.10.2022.</strong>
          </p>
          <p>
            <img src={event} alt="event" id="icon_location" />
            Rok zadatka: <strong>14.10.2022.</strong>
          </p>
          <p>
            <img src={note} alt="note" id="icon_location" />
            Opis: <strong>Napravi to</strong>
          </p>
          <button id="modal_button1">
            <span>detalji zadatka</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LocationModal;
