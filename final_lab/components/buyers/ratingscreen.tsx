import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const RatingsScreen: React.FC = () => {
  const [rating, setRating] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');

  const handleSubmit = () => {
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rate the Product</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Rating (1-5)"
        value={rating}
        onChangeText={setRating}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Write Feedback"
        value={feedback}
        onChangeText={setFeedback}
        multiline
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16, borderRadius: 4 },
});

export default RatingsScreen;
