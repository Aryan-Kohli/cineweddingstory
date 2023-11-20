import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Aboutus from "./components/aboutus";
import Events from "./components/events";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Events />
    </>
  );
}

export default App;
