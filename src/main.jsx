import { StrictMode } from "react"; // Importa StrictMode
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles/global.css";
import App from "./App.jsx";
import "./i18n";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
