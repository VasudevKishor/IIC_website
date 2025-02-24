import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Team from "./components/Team";
import { BrowserRouter, Routes, Route } from "react-router";
import Genesis25 from "./pages/Genesis25";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/team" element={<Team/>}/>
                <Route path="/genesis25" element={<Genesis25/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
