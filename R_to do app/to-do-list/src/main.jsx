import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { TodoProvider } from "./context/TodoContext.jsx"; // ✅ التعديل هنا

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <TodoProvider>
        <App />
      </TodoProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
