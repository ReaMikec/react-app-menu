import React, { useState } from "react";

import "./Circle.css";

const data = [
  { id: 1, firstName: "John", lastName: "Doe" },
  { id: 2, firstName: "Jane", lastName: "Smith" },
  { id: 3, firstName: "Bob", lastName: "Joh" },
  { id: 4, firstName: "Mary", lastName: "Davis" },
  { id: 5, firstName: "Tom", lastName: "Ander" },
  { id: 6, firstName: "Linda", lastName: "Wilson" },
  { id: 7, firstName: "Mark", lastName: "Jones" },
  { id: 8, firstName: "Karen", lastName: "Brown" },
  { id: 9, firstName: "David", lastName: "Lee" },
  { id: 10, firstName: "Susan", lastName: "Taylor" },
  { id: 11, firstName: "Ris", lastName: "Tim" },
  { id: 12, firstName: "Amy", lastName: "Martin" },
  { id: 13, firstName: "Paula", lastName: "Mil" },
  { id: 14, firstName: "Mila", lastName: "Scott" },
  { id: 15, firstName: "Emily", lastName: "Davis" },
  { id: 16, firstName: "Jason", lastName: "Smith" },
  { id: 17, firstName: "Step", lastName: "Grey" },
  { id: 18, firstName: "Chris", lastName: "Lee" },
  { id: 19, firstName: "Rachel", lastName: "Wit" },
  { id: 20, firstName: "Timon", lastName: "Wil" },
  { id: 21, firstName: "Ashe", lastName: "Mart" },
  { id: 22, firstName: "Brian", lastName: "Toma" },
  { id: 23, firstName: "Meli", lastName: "Scott" },
  { id: 24, firstName: "Eric", lastName: "Vis" },
  { id: 25, firstName: "Laura", lastName: "Wil" },
];

const Circle = ({ firstName, lastName }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="circle"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="initials">
        {firstName.charAt(0)}
        {lastName.charAt(0)}
      </div>
      {hovered && (
        <div className="hover_text">
          <div className="hover_name">{`${firstName} ${lastName}`}</div>
        </div>
      )}
    </div>
  );
};

export default function App() {
  const circles = Array.from(
    { length: 25 },
    (_, index) => data[index % data.length]
  );
  const rows = Array.from({ length: 4 }, (_, index) =>
    circles.slice(index * 7, (index + 1) * 7 + (index === 3 ? 1 : 0))
  );

  return (
    <div className="App">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map(({ firstName, lastName }, circleIndex) => (
            <Circle
              key={circleIndex}
              firstName={firstName}
              lastName={lastName}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
