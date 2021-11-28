import React from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Main } from "./Pages/Main/Main";
import { CompanyInfo } from "./Pages/CompanyInfo/CompanyInfo";

const App = () => {
  return (
    <div className="App">
      <h1>The Company In</h1>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/CompanyInfo" element={<CompanyInfo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
