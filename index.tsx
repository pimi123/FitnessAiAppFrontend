import { Text, View, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pusher from "pusher-js/react-native";
import subscribeToPusher from "./utils/SocetsSetup";

type MessageData = {
  message: string;
};
export default function Index() {

  const [message, setMessage] = useState<string>('Waiting for message...');

  useEffect(() => {
    subscribeToPusher("chat", "message.sent", (data: MessageData) => {
      console.log("Received message:", data.message, "nana e naut ");
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Message from Laravel Reverb:</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 16,
    color: 'blue',
  },
});
