import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Survey from "./components/pages/Survey";
import Header from "./components/Header";
import ClientForm from "./components/ClientForm";
import Error from "./components/Error";
import Freelances from "./components/pages/Freelances";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/survey/:questionNumber" element={<Survey />}>
          <Route path="client" element={<ClientForm />} />
        </Route>
        <Route path="/freelances" element={<Freelances />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
