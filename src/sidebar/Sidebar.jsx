import React, { useState } from "react";

import { NavLink } from "react-router-dom";

import icon from "../assets/expand_less.png";
import "./App.scss";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Resursi",
      icon: require("../assets/construction.png"),
    },
    {
      path: "/vozila",
      name: "Vozila",
      icon: require("../assets/directions.png"),
      group: "resources",
    },
    {
      path: "/strojevi",
      name: "Strojevi",
      icon: require("../assets/Vector.png"),
      group: "resources",
    },
    {
      path: "/kooperanti",
      name: "Kooperanti",
      icon: require("../assets/engineering.png"),
      group: "resources",
    },
    {
      path: "/gradilista",
      name: "Gradilista",
      icon: require("../assets/house_siding.png"),
      group: "sites",
    },
    {
      path: "/financije",
      name: "Financije",
      icon: require("../assets/euro.png"),
      group: "finance",
    },
    {
      path: "/tvrtka",
      name: "Tvrtka",
      icon: require("../assets/apartment.png"),
      group: "company",
    },
    {
      path: "/zaposlenici",
      name: "Zaposlenici",
      icon: require("../assets/groups.png"),
      group: "company",
    },
    {
      path: "/izvještaji",
      name: "Izvještaji",
      icon: require("../assets/description.png"),
      group: "reports",
    },
    {
      path: "/mojaFirma",
      name: "Moja Firma",
      icon: require("../assets/apartment.png"),
      group: "mycompany",
    },
  ];
  return (
    <div className="container">
      <div
        style={{ width: isOpen ? "150px" : "60px", position: "sticky", top: 0 }}
        className={`sidebar`}
      >
        <div className="top_section">
          <p
            onClick={toggle}
            style={{ display: isOpen ? "block" : "none" }}
            className="close"
          >
            Zatvori menu
          </p>
          <div className="bars">
            <img src={icon} alt="expand_less icon" onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={`link ${item.group} ${isOpen ? "active" : ""}`}
          >
            <div
              className="icon"
              style={{
                paddingTop:
                  item.name === "Gradilista" ||
                  item.name === "Financije" ||
                  item.name === "Tvrtka" ||
                  item.name === "Izvještaji"
                    ? "45px"
                    : 0,
              }}
            >
              <img src={item.icon} alt={item.name} />
            </div>
            <div
              style={{
                display: isOpen ? "block" : "none",
                paddingTop:
                  item.group === "sites" ||
                  item.name === "Financije" ||
                  item.name === "Tvrtka" ||
                  item.name === "Izvještaji"
                    ? "45px"
                    : 0,
              }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
