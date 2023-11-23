import React, { useState } from "react";
import axios from "axios";
const adminpage = () => {
  const [imageFile, setImageFile] = useState(null);
  const [category, setcategory] = useState("");
  const [link, setimglink] = useState("");
  const handleSelectChange = (event) => {
    setcategory(event.target.value);
  };

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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="imageInput">Select Image:</label>
          <input
            type="file"
            id="imageInput"
            accept="image/*" // Accept only image files
            onChange={handleImageChange}
          />
        </div>
        <div>
          <h2>Selected Category: {category}</h2>
          <select value={category} onChange={handleSelectChange}>
            <option value="">Select an option</option>
            <option value="Wedding">Wedding</option>
            <option value="Mehandi">Mehandi</option>
            <option value="Prewedding">Prewedding</option>
            <option value="Birthday">Birthday</option>
            <option value="Sagan">Sagan</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>
        <button type="submit">Upload Image</button>
      </form>
    </div>
  );
};

export default adminpage;
