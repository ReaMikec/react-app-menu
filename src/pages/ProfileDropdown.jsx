import React, { useState } from "react";
import expandIcon from "../assets/expand_more.png";
import person from "../assets/person.png";
import settings from "../assets/settings.png";
import contact from "../assets/contact.png";
import logout from "../assets/logout.png";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-dropdown">
      <div className="profile" onClick={handleDropdownClick}>
        <div className="name">
          <p>
            Ivan Horvat{" "}
            <img
              src={expandIcon}
              alt="Expand"
              className={`expand-icon ${isOpen ? "rotate-icon" : ""}`}
            />
          </p>
        </div>
      </div>
      {isOpen && (
        <ul className="dropdown-menu">
          <li className="info-item">
            <p>
              <img src={person} alt="" className="mini-icon" />
              Moj profil
            </p>
          </li>
          <li>
            <p>
              <img src={settings} alt="" className="mini-icon" />
              Postavke
            </p>
          </li>
          <li className="info-item">
            <p>
              <img src={contact} alt="" className="mini-icon" />
              Info
            </p>
          </li>
          <li>
            <p>
              {" "}
              <img src={logout} alt="" className="mini-icon" />
              Odjava
            </p>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ProfileDropdown;
