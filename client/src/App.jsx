import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Indexpage from "./pages/indexpage.jsx";
import Adminpage from "./pages/adminpage.jsx";
function App() {
  return (
    <div>
      <Routes>
        <Route element={<Indexpage />} path="/" />
        <Route element={<Adminpage />} path="/admin" />
      </Routes>
    </div>
  );
}

export default App;
