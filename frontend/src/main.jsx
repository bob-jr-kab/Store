import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "@mui/material";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  <BrowserRouter>
    <GlobalStyles
      styles={{
        body: { margin: 0, padding: 0 },
        html: { margin: 0, padding: 0 },
        "#root": { height: "100%", width: "100%" },
      }}
    />
    <App />
  </BrowserRouter>
  // {/* </StrictMode> */}
);
