import React from "react";
import "../css/whatsapp.css";
import Wh from "../pics/wh.png";
export default function whatsapp() {
  return (
    <div className="chat-icon">
      <a
        href="https://wa.me/919582247107"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-link"
      >
        <img
          src={Wh} // Replace with your WhatsApp icon
          alt="WhatsApp Icon"
          className="whatsapp-icon"
        />
      </a>
    </div>
  );
}
