import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TablePagination,
  Button,
  IconButton,
} from "@mui/material";
import { TableContainer } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const tableCellStyles = {
  padding: "10px",
  fontSize: "14px",
};

const tableRowStyles = {
  padding: "5px",
};

function DocsTable() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const rows = Array.from(Array(9)).map((_, index) => ({
    id: index + 1,
    datum: `Status ${index + 1}`,
    oznake: `Broj ${index + 1}`,
    voditelj: `Dodao ${index + 1}`,
    empty: ``,
  }));
  const renderStatusButtons = (rowId) => {
    const buttonCount = rowId % 3 === 0 ? 4 : (rowId % 3) + 1;
    const buttons = [];

    for (let i = 0; i < buttonCount; i++) {
      const buttonText = i % 2 === 0 ? "U pripremi" : "Završi";

      buttons.push(
        <Button
          key={i}
          sx={{
            backgroundColor: "#333333",
            color: "white",
            borderRadius: "18px",
            width: "100px",
            height: "24px",
            marginRight: "4px",
          }}
          size="small"
        >
          {buttonText}
        </Button>
      );
    }

    return buttons;
  };

  return (
    <>
      <div className="table-container">
        <TableContainer sx={{ maxHeight: "600px" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333333" }}>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Naziv dokumenta
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  <IconButton
                    id="iconbutton"
                    size="small"
                    sx={{ color: "white" }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                  Status
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  <IconButton
                    id="iconbutton"
                    size="small"
                    sx={{ color: "white" }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                  Broj/Oznaka
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  <IconButton
                    id="iconbutton"
                    size="small"
                    sx={{ color: "white" }}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                  Voditelj
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.id} sx={tableRowStyles}>
                  <TableCell>Gradilište {row.id}</TableCell>
                  <TableCell sx={tableRowStyles}>
                    {renderStatusButtons(row.id)}
                  </TableCell>
                  <TableCell sx={tableRowStyles}>{row.oznake}</TableCell>
                  <TableCell sx={tableRowStyles}>{row.voditelj}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </div>
    </>
  );
}

export default DocsTable;
