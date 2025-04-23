import { Text, View, Button, StyleSheet } from "react-native";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pusher from "pusher-js/react-native";

export default function Index() {

  const [message, setMessage] = useState<string>('Waiting for message...');

  useEffect(() => {
    // Replace with your Reverb config values
    const pusher = new Pusher('local', {
      cluster: 'mt1',
      wsHost: '192.168.1.7',
      wsPort: 8080,
      forceTLS: false,
      disableStats: true,
      enabledTransports: ['ws'],
    });

    const channel = pusher.subscribe('chat');

    // Confirm subscription success
    channel.bind('pusher:subscription_succeeded', () => {
      console.log('✅ Subscribed to chat channel');
    });

    channel.bind('message.sent', (data: any) => {
      console.log('🔥 Received data:', data);
      setMessage(data.message); // Set state with received message
    });


    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
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
