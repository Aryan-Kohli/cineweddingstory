import React, { useState, useEffect } from "react";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../css/events.css"; // Import your custom CSS file

const Events = () => {
  const [alldata, setdata] = useState(null);
  const [groupedData, setGroupedData] = useState({});

  useEffect(() => {
    if (alldata) {
      const updatedGroupedData = alldata.reduce((acc, item) => {
        if (!acc[item.category]) {
          acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
      }, {});
      setGroupedData(updatedGroupedData);
    }
  }, [alldata]);

  useEffect(() => {
    axios
      .get("http://localhost:2000/getalldata")
      .then((response) => {
        setdata(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container mt-4">
      <div className="eventshead">
        <h1>Events</h1>
      </div>
      {/* <h1 className="eventshead"></h1> */}
      <div id="accordion" className="accordion">
        {Object.keys(groupedData).map((category, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                {category}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#accordion"
            >
              <div className="accordion-body">
                <div className="row">
                  {groupedData[category].map((item) => (
                    <div className="col-md-6 mb-3" key={item.id}>
                      <img
                        src={item.link}
                        className="img1"
                        alt={`Image ${item.id}`}
                      />
                      {console.log("image link: ", item.link)}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
