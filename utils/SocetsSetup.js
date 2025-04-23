import Pusher from "pusher-js/react-native";

const pusher = new Pusher("your-key", {
  wsHost: "192.168.1.7", // your machine's IP, same as used for Laravel serve
  wsPort: 6001,
  forceTLS: false,
  disableStats: true,
  enabledTransports: ["ws"],
});

const channel = pusher.subscribe("chat");
channel.bind("message.sent", function (data) {
  console.log("Received message:", data.message);
});

export default pusher;
