import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import io from 'socket.io-client';

const ChatScreen: React.FC = () => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const socket = io('https://chat-server.example.com');

  useEffect(() => {
    socket.on('message', (msg) => setMessages((prev) => [...prev, msg]));
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = () => {
    socket.emit('message', message);
    setMessage('');
  };

  return (
    <View>
      <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
      <TextInput value={message} onChangeText={setMessage} placeholder="Type a message" />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default ChatScreen;
