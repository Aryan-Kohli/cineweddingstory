import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aboutus from "./components/aboutus";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
    </>
  );
}

export default App;
