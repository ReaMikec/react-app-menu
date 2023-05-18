import React, { useState } from "react";
import "./CheckboxGrid.css";

function CheckboxGrid() {
  const [grid, setGrid] = useState([
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
    [false, false, false],
  ]);

  const handleCheckboxChange = (rowIndex, colIndex) => {
    const newGrid = [...grid];
    newGrid[rowIndex][colIndex] = !newGrid[rowIndex][colIndex];
    setGrid(newGrid);
  };

  const checkboxRows = [
    { label: "Gradilišta", values: grid[0] },
    { label: "Komentari gradilišta", values: grid[1] },
    { label: "Prihodi", values: grid[2] },
    { label: "Radni sati", values: grid[3] },
    { label: "Troškovi", values: grid[4] },
    { label: "Zadaci", values: grid[5] },
  ];

  return (
    <div className="grid-main">
      <div className="grid-container">
        <div className="grid-header">
          <label className="read">Čitanje</label>
          <label className="write">Pisanje</label>
          <label className="remove">Brisanje</label>
        </div>
        <div className="grid-box">
          <div className="grid-content">
            {checkboxRows.map((row, rowIndex) => (
              <div key={rowIndex} className="grid-row">
                <label className="grid-row-label">{row.label}</label>
                {row.values.map((isChecked, colIndex) => (
                  <div key={colIndex} className="grid-checkbox">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(rowIndex, colIndex)}
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckboxGrid;
