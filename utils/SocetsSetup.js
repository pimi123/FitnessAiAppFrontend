// utils/pusher.js
import Pusher from "pusher-js/react-native";

const pusherInstance = new Pusher("local", {
  cluster: "mt1",
  wsHost: "192.168.1.7",
  wsPort: 8080,
  forceTLS: false,
  disableStats: true,
  enabledTransports: ["ws"],
});

/**
 * Subscribe to a Pusher channel and event
 * @param {string} channelName - The channel to subscribe to
 * @param {string} eventName - The event name to bind
 * @param {function} callback - Function to call when event is received
 * @returns {object} An object containing the channel and callback for later unbinding
 */
const subscribeToPusher = (channelName, eventName, callback) => {
  console.log(channelName, eventName);
  const channel = pusherInstance.subscribe(channelName);
  channel.bind(eventName, callback);
};

export default subscribeToPusher;
