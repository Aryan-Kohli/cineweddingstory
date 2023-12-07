const express = require('express');
const mongoose = require('mongoose');
const app = express();
const Router = express.Router();
const dotenv = require('dotenv');
const Img = require("./models/imgmodel");
const cors = require('cors');
dotenv.config();
app.use(express.json());
app.use(cors());
mongoose.connect(process.env.MONGO_URL);
app.post('/upload',async (req,resp)=>{
     const {category , link} = req.body;
    const Imgdoc = await Img.create({category:category , link : link});
    console.log(Imgdoc);
    resp.json(Imgdoc);
})

app.delete('/delete_img/:imageId', async (req, res) => {
  const imageId = req.params.imageId; // Extract imageId from URL params

  try {
    // Find the image by ID in your Img model and remove it
    const deletedImage = await Img.findByIdAndDelete(imageId);

    if (!deletedImage) {
      console.log("Image not found");
      return res.status(404).json({ message: 'Image not found' });
    }

    // If successfully deleted, send a success response
    return res.status(200).json({ message: 'Image deleted successfully' });
  } catch (error) {
    console.error('Error deleting image:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
});
app.get('/getalldata', async (req, res) => {
  try {
    // Fetch all data from your collection using your Mongoose model
    const allData = await Img.find({});

    // Return the fetched data as a JSON response
    res.json({ data: allData });
  } catch (error) {
    // If an error occurs, send an error response
    res.status(500).json({ error: error.message });
  }
});

   


app.listen(2000,(req,resp)=>{
    console.log("Server started");
})