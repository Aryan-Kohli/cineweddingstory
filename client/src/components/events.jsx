import React from "react";
import Card from "./cards.jsx";
import "../css/events.css";
export default function events() {
  return (
    <div className="events ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 eventshead">
            <h1>Events</h1>
          </div>
        </div>
        <div className="row">
          <Card />
        </div>
      </div>
    </div>
  );
}
