import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
//import Genesis from "./components/Genesis";
import Team from "./components/Team";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<App />} />
            <Route path="team" element={<Team />} />
        </Routes>
    </BrowserRouter>
);
