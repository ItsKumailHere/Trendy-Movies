import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary
      fallback={
        <div className="bg-red-600">
          Something went wrong while displaying the app. Please check console to
          further errors
        </div>
      }
    >
      <App />
    </ErrorBoundary>
  </StrictMode>
);
