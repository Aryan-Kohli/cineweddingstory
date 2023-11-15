import React from "react";
import "../css/aboutus.css";
import pic4 from "../pics/pic4.webp";
import pic2 from "../pics/pic2.webp";
export default function aboutus() {
  return (
    <div className="aboutus" id="aboutus">
      <div className="container">
        <div className="row">
          <div className="col">
            {" "}
            <h1 className="aboutushead">ABOUT US</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 aboutp1">
            <h1>
              Welcome to Cine Wedding Story, where we capture life's precious
              moments through the art of photography and videography. With over
              25 years of immersive experience, we take pride in curating
              stunning visuals that immortalize your special events and
              celebrations.
            </h1>
          </div>
          <div className="col-md-4 offset-md-2 ">
            <img src={pic4} className="aboutp1img" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-4  ">
            <img src={pic2} className="aboutp2img" />
          </div>
          <div className="col-md-8  aboutp2">
            <h1>Our Expertise</h1>
            <h1>
              At Cine Wedding Story , we specialize in encapsulating the essence
              of various occasions, spanning a wide array of events including
              weddings, receptions, haldi, mehendi, birthdays, anniversaries,
              pre-weddings, and more. Each event is a unique narrative waiting
              to be beautifully documented, and we ensure to deliver exceptional
              quality in both photography and videography.
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col aboutp2">
            <h1>Why Choose Us ?</h1>
            <h1>
              <ul>
                <li>
                  25+ Years of Experience: Our extensive experience speaks
                  volumes about our commitment and expertise in the field of
                  photography and videography.
                </li>
                <li>
                  Unmatched Quality: We take pride in delivering top-notch
                  quality in both pictures and videos, ensuring each moment is
                  captured with precision and artistry.
                </li>
                <li>
                  Diverse Event Coverage: Whether it's the grandeur of a wedding
                  or the intimacy of a birthday celebration, we have the
                  proficiency to cover all types of events.
                </li>
                <li>
                  Personalized Approach: We understand that each event is
                  unique. Therefore, we tailor our services to meet your
                  specific requirements, ensuring your vision is brought to
                  life.
                </li>
              </ul>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
