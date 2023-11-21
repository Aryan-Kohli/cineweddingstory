import React from "react";
import Card from "./cards.jsx";
import pw1 from "../pics/pw1.jpg";
import pw2 from "../pics/pw2.jpg";
import pw3 from "../pics/pw3.jpg";
import pw5 from "../pics/pw5.jpg";
import pw4 from "../pics/pw4.jpg";
import w1 from "../pics/w1.jpg";
import w2 from "../pics/w2.jpg";
import w3 from "../pics/w3.jpg";
import w5 from "../pics/w5.jpg";
import w4 from "../pics/w4.jpg";
import w6 from "../pics/w6.jpg";
import haldi1 from "../pics/haldi1.jpg";
import haldi2 from "../pics/haldi2.jpg";
import haldi3 from "../pics/haldi3.jpg";
import haldi4 from "../pics/haldi4.jpg";

import "../css/events.css";
export default function events() {
  return (
    <div className="events ">
      <div className="container">
        <div className="row">
          <div className="col-md-12 eventshead">
            <h1>Gallery</h1>
          </div>
        </div>
        <div className="row">
          <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  Prewedding
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                className="accordion-collapse collapse show"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-md-6 mt-4">
                      <img src={pw1} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={pw2} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={pw3} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={pw5} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={pw4} className="img1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseTwo"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseTwo"
                >
                  Wedding
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseTwo"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-md-6 mt-4">
                      <img src={w1} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={w2} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={w3} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={w5} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={w4} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={w6} className="img1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseThree"
                  aria-expanded="false"
                  aria-controls="panelsStayOpen-collapseThree"
                >
                  Haldi Ceromony
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseThree"
                className="accordion-collapse collapse"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-md-6 mt-4">
                      <img src={haldi1} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={haldi2} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={haldi3} className="img1" />
                    </div>
                    <div className="col-md-6 mt-4">
                      <img src={haldi4} className="img1" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
