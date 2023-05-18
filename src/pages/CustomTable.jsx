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

import "../style/CustomTable.css";

const tableCellStyles = {
  padding: "10px",
  fontSize: "14px",
};

const tableRowStyles = {
  padding: "5px",
};

function CustomTable() {
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);
  const [sortOrder, setSortOrder] = useState({
    status: "asc",
    broj: "asc",
    supervisor: "asc",
    year: "asc",
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const handleSortColumn = (column) => {
    setSortOrder((prevSortOrder) => ({
      ...prevSortOrder,
      [column]: prevSortOrder[column] === "asc" ? "desc" : "asc",
    }));
  };
  const names = [
    "Ivan Jelenić",
    "Marko Perić",
    "Ana Kovač",
    "Petra Novak",
    "Maja Horvat",
    "Ivan Smith",
    "Luka Ivan",
    "Marko Maric",
    "Filip lukić",
    "Ivo Ivić",
  ];
  const years = [
    "2021",
    "2022",
    "2023",
    "2024",
    "2025",
    "2024",
    "2001",
    "2011",
    "2014",
    "2012",
  ];

  const rows = Array.from(Array(10)).map((_, index) => {
    const nameIndex = index % names.length;
    const yearIndex = index % years.length;
    return {
      id: index + 1,
      status: `Status ${index + 1}`,
      broj: `Broj ${index + 1}`,
      supervisor: names[nameIndex],
      adresa: `Adresa ${index + 1}`,
      pocetak: `Pocetak ${index + 1}`,
      zavrsetak: `Zavrsetak ${index + 1}`,
      year: years[yearIndex],
    };
  });
  const sortedRows = rows.sort((a, b) => {
    const column = Object.keys(sortOrder).find(
      (key) => sortOrder[key] !== "asc"
    );
    const order = sortOrder[column] === "desc" ? -1 : 1;

    if (a[column] < b[column]) {
      return -1 * order;
    }
    if (a[column] > b[column]) {
      return 1 * order;
    }
    return 0;
  });

  return (
    <>
      <div className="table-container">
        <TableContainer sx={{ maxHeight: "600px" }}>
          <Table>
            <TableHead>
              <TableRow sx={{ backgroundColor: "#333333" }}>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Naziv gradilišta
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  <IconButton
                    id="iconbutton"
                    size="small"
                    sx={{ color: "white" }}
                    onClick={() => handleSortColumn("status")}
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
                    onClick={() => handleSortColumn("broj")}
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
                    onClick={() => handleSortColumn("supervisor")}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                  Voditelj
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  Adresa
                </TableCell>
                <TableCell sx={{ color: "white", ...tableCellStyles }}>
                  <IconButton
                    id="iconbutton"
                    size="small"
                    sx={{ color: "white" }}
                    onClick={() => handleSortColumn("pocetak")}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                  Početak projekta
                </TableCell>
                <TableCell
                  id="table_text"
                  sx={{ color: "white", ...tableCellStyles }}
                >
                  <IconButton
                    id="iconbutton"
                    size="small"
                    sx={{ color: "white" }}
                    onClick={() => handleSortColumn("zavrsetak")}
                  >
                    <ArrowDownwardIcon />
                  </IconButton>
                  Predviđeni završetak
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? sortedRows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : sortedRows
              ).map((row) => (
                <TableRow key={row.id} sx={tableRowStyles}>
                  <TableCell>Gradilište {row.id}</TableCell>
                  {row.id === 2 ? (
                    <TableCell sx={tableRowStyles}>
                      <Button
                        sx={{
                          backgroundColor: "#FFC436",
                          color: "white",
                          borderRadius: "18px",
                          width: "100px",
                          height: "24px",
                        }}
                        size="small"
                      >
                        U pripremi
                      </Button>
                    </TableCell>
                  ) : row.id >= 9 ? (
                    <TableCell sx={tableRowStyles}>
                      <Button
                        sx={{
                          backgroundColor: "#333",
                          color: "white",
                          borderRadius: "18px",
                          width: "88px",
                          height: "24px",
                        }}
                        size="small"
                      >
                        Arhiva
                      </Button>
                    </TableCell>
                  ) : (
                    <TableCell sx={tableRowStyles}>
                      <Button
                        sx={{
                          backgroundColor: "#2ACB7E",
                          color: "white",
                          borderRadius: "18px",
                          width: "88px",
                          height: "24px",
                        }}
                        size="small"
                      >
                        Aktivno
                      </Button>
                    </TableCell>
                  )}
                  <TableCell sx={tableRowStyles}>{row.year}</TableCell>
                  <TableCell sx={tableRowStyles}>{row.supervisor}</TableCell>
                  <TableCell sx={tableRowStyles}>
                    Mala ulica 23, 10 000 Zagreb
                  </TableCell>
                  <TableCell sx={tableRowStyles}>12.10.2022.</TableCell>
                  <TableCell sx={tableRowStyles}>12.10.2023.</TableCell>
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

export default CustomTable;
