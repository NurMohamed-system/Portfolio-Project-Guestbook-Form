// Import the Express module
import express from "express";

// Instantiate an Express application
const app = express();

// Serve static files from the 'public' directoryh
app.use(express.static("public"));

//Define the port number where our server will listen
const PORT = 3000;

//Create a "default" route for our webiste's home page
app.get("/", (req, res) => {
  // send our home page as a response to teh client
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Tell the server to listen on our specified port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
