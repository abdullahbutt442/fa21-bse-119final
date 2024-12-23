import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CartScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const handleCheckout = () => {
    navigation.navigate('OrderTracking');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cart</Text>
      <Text>Items in your cart will appear here.</Text>
      <Button title="Proceed to Checkout" onPress={handleCheckout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 16 },
});

export default CartScreen;
