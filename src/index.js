import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import Team from "./pages/Team";
import Header from "./components/Header"
import { BrowserRouter, Routes, Route } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<App />}/>
                <Route path="/team" element={<Team/>}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
