import React, { useState, useEffect } from "react";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    borderTop: "1px ridge",
    borderBottom: "1px ridge",
    textAlign: "left",
    height: "10px",
  },
  [`&.${tableCellClasses.body}`]: {
    backgroundColor: "#FFFFFF",
    fontSize: 14,
    fontWeight: 700,
    border: "none",
    textAlign: "left",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#FFFFFF",
}));

export default function HoursTable({ rows }) {
  const [editableValues, setEditableValues] = useState({});
  useEffect(() => {
    const storedValues = localStorage.getItem("editableValues");
    if (storedValues) {
      setEditableValues(JSON.parse(storedValues));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("editableValues", JSON.stringify(editableValues));
  }, [editableValues]);
  const [editedRows, setEditedRows] = useState([]);

  const handleValueChange = (e, row, columnName) => {
    const { value } = e.target;
    const updatedRows = {
      ...editedRows,
      [row.name]: { ...editedRows[row.name], [columnName]: value },
    };
    setEditedRows(updatedRows);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell></StyledTableCell>
            <StyledTableCell align="right">SUB 24.12 - 60 sati</StyledTableCell>
            <StyledTableCell align="right">NED 25.12 - 60 sati</StyledTableCell>
            <StyledTableCell align="right">PON 26.12 - 60 sati</StyledTableCell>
            <StyledTableCell align="right">UTO 27.12 - 80 sati</StyledTableCell>
            <StyledTableCell align="right">SRI 28.12 - 80 sati</StyledTableCell>
            <StyledTableCell align="right">ČET 29.12 - 50 sati</StyledTableCell>
            <StyledTableCell align="right">PET 30.12 - 60 sati</StyledTableCell>
            <StyledTableCell align="right">SUB 31.12 - 60 sati</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  className="input-number"
                  value={
                    editedRows[row.name]?.value1 !== undefined
                      ? editedRows[row.name]?.value1
                      : row.value1 !== null
                      ? row.value1
                      : ""
                  }
                  onChange={(e) => handleValueChange(e, row, "value1")}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  className="input-number"
                  value={
                    editedRows[row.name]?.value2 !== undefined
                      ? editedRows[row.name]?.value2
                      : row.value2 !== null
                      ? row.value2
                      : ""
                  }
                  onChange={(e) => handleValueChange(e, row, "value2")}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  className="input-number"
                  value={
                    editedRows[row.name]?.value3 !== undefined
                      ? editedRows[row.name]?.value3
                      : row.value3 !== null
                      ? row.value3
                      : ""
                  }
                  onChange={(e) => handleValueChange(e, row, "value3")}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  className="input-number"
                  value={
                    editedRows[row.name]?.value2 !== undefined
                      ? editedRows[row.name]?.value2
                      : row.value2 !== null
                      ? row.value2
                      : ""
                  }
                  onChange={(e) => handleValueChange(e, row, "value2")}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  className="input-number"
                  value={
                    editedRows[row.name]?.value4 !== undefined
                      ? editedRows[row.name]?.value4
                      : row.value4 !== null
                      ? row.value4
                      : ""
                  }
                  onChange={(e) => handleValueChange(e, row, "value4")}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  className="input-number"
                  value={
                    editedRows[row.name]?.value2 !== undefined
                      ? editedRows[row.name]?.value2
                      : row.value2 !== null
                      ? row.value2
                      : ""
                  }
                  onChange={(e) => handleValueChange(e, row, "value2")}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  className="input-number"
                  value={
                    editedRows[row.name]?.value2 !== undefined
                      ? editedRows[row.name]?.value2
                      : row.value2 !== null
                      ? row.value2
                      : ""
                  }
                  onChange={(e) => handleValueChange(e, row, "value2")}
                />
              </StyledTableCell>
              <StyledTableCell align="right">
                <input
                  className="input-number"
                  value={
                    editedRows[row.name]?.value4 !== undefined
                      ? editedRows[row.name]?.value4
                      : row.value4 !== null
                      ? row.value4
                      : ""
                  }
                  onChange={(e) => handleValueChange(e, row, "value4")}
                />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
