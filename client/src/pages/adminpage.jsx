import React, { useState, useEffect } from "react";
import "../css/adminpage.css";
import axios from "axios";
const adminpage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [alldata, setdata] = useState(null);

  const [category, setcategory] = useState("");
  const [link, setimglink] = useState("");
  const handleSelectChange = (event) => {
    setcategory(event.target.value);
  };

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
  const handleImageChange = (event) => {
    // Access the image file from the input event
    const file = event.target.files[0];
    setImageFile(file);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (imageFile) {
      const formData = new FormData();
      formData.append("image", imageFile);

      fetch(
        "https://api.imgbb.com/1/upload?key=916683c46968dd987b38ed7a4e4941ad",
        {
          method: "POST",
          body: formData,
        }
      )
        .then((response) => response.json())
        .then((data) => {
          setimglink(data.data.url);

          // Use Axios for the second API call
          const requestData = {
            category: category,
            link: data.data.display_url,
          };
          console.log("link is ", data.data.url);
          axios
            .post("http://localhost:2000/upload", requestData)
            .then((axiosResponse) => {
              console.log(
                "Response from localhost:2000/upload:",
                axiosResponse.data
              );
              // Handle the response from the second API call
              // Perform actions with the data received, if needed
            })
            .catch((error) => {
              console.error(
                "Error fetching from localhost:2000/upload:",
                error
              );
            });
        })
        .catch((error) => {
          console.error("Error fetching image:", error);
        });

      // const { data } = axios.post("http://localhost:2000/upload", {
      //   category,
      //   imageFile,
      // });
      // console.log("uploaded data is : ", data);
    } else {
      // Handle case when no image is selected
      console.log("Please select an image.");
    }
  };
  const handlePassChange = (event) => {
    setPassword(event.target.value);
  };
  const SubmitPass = (event) => {
    event.preventDefault();
    // Replace 'yourPassword' with your desired password
    const correctPassword = "123";

    if (password === correctPassword) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };
  const handleDelete = async (imageId) => {
    try {
      // Send a DELETE request to remove the image with the provided ID
      await axios.delete(`http://localhost:2000/delete_img/${imageId}`);

      // After successful deletion, update the state to reflect the changes
      setdata(alldata.filter((item) => item._id !== imageId));
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };
  return (
    <div>
      {isAuthenticated == false ? (
        <div className="password-form mt-4">
          <h2 className="red-text text-center">Enter the password</h2>
          <form onSubmit={SubmitPass}>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePassChange}
            />
            <button type="submit">Submit</button>
          </form>
          {isAuthenticated && <p className="success-message">Authenticated!</p>}
          {password !== "" && !isAuthenticated && (
            <p className="error-message">Incorrect password. Try again.</p>
          )}
        </div>
      ) : (
        <div>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form
                  onSubmit={handleSubmit}
                  className="border p-4 rounded bg-light"
                >
                  <div className="form-group">
                    <label htmlFor="imageInput">Select Image:</label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="imageInput"
                      accept="image/*"
                      onChange={handleImageChange}
                    />
                  </div>
                  <div className="form-group">
                    <h2>Selected Category: {category}</h2>
                    <select
                      className="form-control"
                      value={category}
                      onChange={handleSelectChange}
                    >
                      <option value="">Select an option</option>
                      <option value="Wedding">Wedding</option>
                      <option value="Mehandi">Mehandi</option>
                      <option value="Prewedding">Prewedding</option>
                      <option value="Birthday">Birthday</option>
                      <option value="Sagan">Sagan</option>
                      <option value="Anniversary">Anniversary</option>
                    </select>
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Upload Image
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="container mt-5">
            <div className="row">
              {alldata.map((item) => (
                <div key={item._id} className="col-md-4 mb-3">
                  <div className="card">
                    <img
                      src={item.link}
                      className="card-img-top"
                      alt={item.category}
                    />
                    <div className="card-body">
                      <h5 className="card-title">Category: {item.category}</h5>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(item._id)}
                      >
                        Delete Image
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default adminpage;
