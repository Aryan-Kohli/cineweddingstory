import React from "react";
import "../css/aboutus.css";
import pic2 from "../pics/pic2.webp";
import pic3 from "../pics/pic3.webp";
import pic4 from "../pics/pic4.webp";
import pic5 from "../pics/pic5.jpg";
export default function aboutus() {
  return (
    <div className=" mt-4">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="row">
              <div className="col">
                <img src={pic2} className="aboutimg" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img src={pic3} className="aboutimg" />
              </div>
            </div>
          </div>
          <div className="col-md-6 Aboutus">
            <div className="container-fluid">
              <div className="row  mt-4">
                <div className="col-md-12 abouthead ">
                  <h1>About Us</h1>
                </div>
              </div>
              <div className="row  mt">
                <div className="col-md-12 aboutpara">
                  <h3>
                    Welcome to Cine Wedding Story, where we capture life's
                    precious moments through the art of photography and
                    videography. With over 25 years of immersive experience, we
                    take pride in curating stunning visuals that immortalize
                    your special events and celebrations.
                  </h3>
                </div>
              </div>
              <div className="row  mt-4">
                <div className="col-md-12 abouthead ">
                  <h1>Our Expertise</h1>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12 aboutpara">
                  <h3>
                    At Cine Wedding Story, we specialize in encapsulating the
                    essence of various occasions, spanning a wide array of
                    events including weddings, receptions, haldi, mehendi,
                    birthdays, anniversaries, pre-weddings, and more. Each event
                    is a unique narrative waiting to be beautifully documented,
                    and we ensure to deliver exceptional quality in both
                    photography and videography.
                  </h3>
                </div>
              </div>
              <div className="row  mt-4">
                <div className="col-md-12 abouthead ">
                  <h1>Our Commitment to Excellence</h1>
                </div>
              </div>
              <div className="row ">
                <div className="col-md-12 aboutpara">
                  <h3>
                    We understand the significance of your cherished moments and
                    the importance of preserving them for a lifetime. Our team
                    is dedicated to providing you with the highest standard of
                    service, ensuring that every snapshot and frame reflects the
                    emotions, joy, and authenticity of the occasion.
                  </h3>
                </div>
              </div>
              <div className="div"></div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col">
                <img src={pic4} className="aboutimg" />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <img src={pic5} className="aboutimg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
