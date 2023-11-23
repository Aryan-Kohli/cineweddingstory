import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Aboutus from "../components/aboutus";
import Events from "../components/events";

export default function indexpage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Events />
    </>
  );
}
