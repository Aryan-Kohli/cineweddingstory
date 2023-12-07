import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Aboutus from "../components/aboutus";
import Events from "../components/events";
import Wh from "../components/whatsapp";

export default function indexpage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutus />
      <Events />
      <Wh />
    </>
  );
}
