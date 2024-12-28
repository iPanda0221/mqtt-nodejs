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
  console.log(`Sending Topic: simple-mqtt, Message: `);
  setInterval(() => {
    var random = Math.random() * 50;
    console.log(random);
    mqttClient.publish("simple-mqtt", random.toString());
  }, 1000);
});
