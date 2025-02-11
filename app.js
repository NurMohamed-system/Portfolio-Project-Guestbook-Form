// impoty Express
import express from "express";

// Instantiate an Express application
const app = express();

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));

// Define a port number for our server to listen on
const PORT = "3000";

// dEFINE A 'DEFAULT' route for our home page
app.get("/", (req, res) => {
  // send our home page as a response to the client
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

// Defina a 'Confirmation' route
app.get("/confirmation", (req, res) => {
  // send our thank you page
  res.send("<h1>Thank You!</h1>");
});

// Tell server to listen on oiur specified port
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
