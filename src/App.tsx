import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventPage from "@/pages/EventPage";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Redireciona da raiz para /eventos */}
        <Route path="/" element={<Navigate to="/home" replace />} />

        {/* Página de cadastro de eventos */}
        <Route path="/home" element={<HomePage />} />

        {/* Página de cadastro de eventos */}
        <Route path="/eventos" element={<EventPage />} />

        {/* Caso a rota não exista */}
        <Route
          path="*"
          element={<h1 className="text-center mt-10">Página não encontrada</h1>}
        />
      </Routes>
    </Router>
  );
}
