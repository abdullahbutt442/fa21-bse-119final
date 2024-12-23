import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OrderTrackingScreen: React.FC = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Order Tracking</Text>
    <Text>Your order is being prepared!</Text>
    <Text>Track delivery status here.</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 16 },
});

import { useSocket } from 'utils/socket';

const OrderTracking: React.FC = () => {
  useSocket('orderUpdate', (data: any) => {
    console.log('Order status updated:', data);
  });

  return <Text>Tracking Orders in Real-Time</Text>;
};


export default OrderTrackingScreen;
