const mqtt = require("mqtt");

var mqttClient = mqtt.connect("mqtt://localhost:1883");

mqttClient.on("error", (err) => {
  console.log("Error: ", err);
  mqttClient.end();
});

mqttClient.on("reconnect", () => {
  console.log("Reconnecting...");
});

mqttClient.on("connect", () => {
  mqttClient.subscribe("simple-mqtt");
  console.log("Client has subscribed to simple-mqtt Topic successfully");
});

mqttClient.on("message", (topic, message) => {
  console.log(
    "Received Message: " + message.toString() + " on Topic: " + topic
  );
});
