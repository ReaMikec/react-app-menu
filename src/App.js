import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kooperanti from "./pages/Kooperanti";
import Gradilista from "./pages/Gradilista";
import Financije from "./pages/Financije";
import Tvrtka from "./pages/Tvrtka";
import Zaposlenici from "./pages/Zaposlenici";
import Izvjestaji from "./pages/Izvjestaji";
import MojaFirma from "./pages/MojaFirma";
import Resursi from "./pages/Resursi";
import Vozila from "./pages/Vozila";
import Strojevi from "./pages/Strojevi";
import Sidebar from "./sidebar/Sidebar";
import NovoGradiliste from "./pages/NovoGradiliste";
import NoviZadatak from "./novi-zadatak/NoviZadatak";
import Zadatak from "./zadatak/Zadatak";
import VoditeljiIZaposlenici from "./pages/VoditeljiIZaposlenici";
import Dokumentacija from "./pages/Dokumentacija";
import NazivGradilista from "./naziv-gradilista/NazivGradilista";
import RadniZadaci from "./radni-zadaci/RadniZadaci";
import Nacrti from "./nacrti/Nacrti";
import Dokumenti from "./dokumenti/Dokumenti";
import RadniSati from "./radni-sati/RadniSati";
import EditTable from "./edit-table/EditTable";

import "./sidebar/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Resursi />} />
          <Route path="resursi" element={<Resursi />} />
          <Route path="vozila" element={<Vozila />} />
          <Route path="strojevi" element={<Strojevi />} />
          <Route path="kooperanti" element={<Kooperanti />} />
          <Route path="gradilista" element={<Gradilista />} />
          <Route path="/novo-gradiliste" element={<NovoGradiliste />} />
          <Route
            path="/voditelji-i-zaposlenici"
            element={<VoditeljiIZaposlenici />}
          />
          <Route path="/naziv-gradilista" element={<NazivGradilista />} />
          <Route path="/radni-zadaci" element={<RadniZadaci />} />
          <Route path="/dokumenti" element={<Dokumenti />} />
          <Route path="/radni-sati" element={<RadniSati />} />
          <Route path="/edit-table" element={<EditTable />} />
          <Route path="/nacrti" element={<Nacrti />} />
          <Route path="/novi-zadatak" element={<NoviZadatak />} />
          <Route path="/zadatak" element={<Zadatak />} />
          <Route path="/dokumentacija" element={<Dokumentacija />} />

          <Route path="financije" element={<Financije />} />
          <Route path="tvrtka" element={<Tvrtka />} />
          <Route path="zaposlenici" element={<Zaposlenici />} />
          <Route path="izvjestaji" element={<Izvjestaji />} />
          <Route path="mojaFirma" element={<MojaFirma />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default App;
