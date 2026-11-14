import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { PageShell } from "./components/PageShell";
import { Home } from "./pages/Home";
import { PorDentro } from "./pages/PorDentro";
import { Soberania } from "./pages/Soberania";
import { Seguranca } from "./pages/Seguranca";
import { Conversas } from "./pages/Conversas";
import { Diario } from "./pages/Diario";
import { Chamadas } from "./pages/Chamadas";
import { Identidade } from "./pages/Identidade";
import { Provedores } from "./pages/Provedores";
import { Confianca } from "./pages/Confianca";
import { Perguntas } from "./pages/Perguntas";
import { Glossario } from "./pages/Glossario";
import { Navigate } from "react-router-dom";

function Shell() {
  const { pathname } = useLocation();
  return (
    <PageShell page={pathname}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/por-dentro" element={<PorDentro />} />
        <Route path="/soberania" element={<Soberania />} />
        <Route path="/seguranca" element={<Seguranca />} />
        <Route path="/conversas" element={<Conversas />} />
        <Route path="/diario" element={<Diario />} />
        <Route path="/chamadas" element={<Chamadas />} />
        <Route path="/identidade" element={<Identidade />} />
        <Route path="/provedores" element={<Provedores />} />
        <Route path="/confianca" element={<Confianca />} />
        <Route path="/perguntas" element={<Perguntas />} />
        <Route path="/glossario" element={<Glossario />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </PageShell>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
