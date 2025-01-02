const mqtt = require("mqtt");

const mqttService = {
  connect() {
    this.client = mqtt.connect("mqtt://localhost:1883"); // Connect to MQTT broker

    this.client.on("connect", () => {
      console.log("Connected to MQTT broker");
    });

    return this.client;
  },

  publish(topic, message) {
    if (this.client) {
      this.client.publish(topic, JSON.stringify(message));
    }
  },

  subscribe(topic, callback) {
    if (this.client) {
      this.client.subscribe(topic, (err) => {
        if (err) console.error(err);
        else console.log(`Subscribed to topic: ${topic}`);
      });

      this.client.on("message", (topic, message) => {
        console.log(message);
        if (topic === topic) {
          callback(JSON.parse(message.toString()));
        }
      });
    }
  },
};

module.exports = mqttService;
