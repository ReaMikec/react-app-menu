import React from "react";
import "../employee-box/EmployeeBox.css";
import employee1 from "../assets/employee1.png";

import info from "../assets/info.png";
import call from "../assets/call.png";
import Email from "../assets/alternate_email.png";

const EmployeeBox = ({ name, position, department, phone, email, image }) => {
  return (
    <div className="employee-box">
      <div className="name-box">
        <div className="box-img">
          <img src={employee1} alt="employee"></img>
        </div>
        <div className="box-name">
          <p id="em-name">{name}</p>
          <h5>{position}</h5>
        </div>
      </div>
      <div>
        <div className="info-box">
          <div className="box-info">
            <img src={info} alt="info"></img>
            <p>{department}</p>
          </div>
          <div className="box-info">
            <img src={call} alt="call"></img>
            <p>{phone}</p>
          </div>
          <div className="box-info">
            <img src={Email} alt="email"></img>
            <p>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeBox;
