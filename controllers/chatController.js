const mqttService = require("../services/mqttService");

const chatController = {
  index(req, res) {
    const messages = []; // Placeholder for messages

    // Subscribe to MQTT topic
    mqttService.subscribe("chat/messages", (message) => {
      console.log(message);
      messages.push(message); // Add message to the array
      res.render("index", { messages }); // Re-render the view with updated messages
    });

    res.render("index", { messages });
  },

  sendMessage(req, res) {
    const { username, message } = req.body;

    if (username && message) {
      const mqttMessage = {
        time: new Date().toISOString(),
        user: username,
        body: message,
      };

      mqttService.publish("chat/messages", mqttMessage);
    }

    res.redirect("/");
  },
};

module.exports = chatController;
