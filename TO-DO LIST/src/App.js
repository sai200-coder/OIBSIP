import React from "react";
import Header from "./components/Header";
import Todoapp from "./components/Todoapp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/todoapp" element={<Todoapp />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
