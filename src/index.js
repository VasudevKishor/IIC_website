import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Genesis from "./components/Genesis";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="genesis" element={<Genesis />} />
        </Routes>
    </BrowserRouter>
);
