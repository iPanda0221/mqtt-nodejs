const express = require("express");
const mqtt = require("mqtt");
const chatController = require("./controllers/chatController");
const mqttService = require("./services/mqttService");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set views engine
app.set("view engine", "ejs");

// Routes
app.get("/", chatController.index);
app.post("/send-message", chatController.sendMessage);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
