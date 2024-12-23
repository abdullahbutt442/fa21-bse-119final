import React from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

interface Order {
  id: string;
  buyer: string;
  status: string;
}

const orders: Order[] = [
  { id: '1', buyer: 'Buyer 1', status: 'Pending' },
  { id: '2', buyer: 'Buyer 2', status: 'Shipped' },
];

const OrderManagementScreen: React.FC = () => {
  const updateStatus = (id: string) => {
    console.log(`Update status for order ${id}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order Management</Text>
      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderItem}>
            <Text>Buyer: {item.buyer}</Text>
            <Text>Status: {item.status}</Text>
            <Button title="Update Status" onPress={() => updateStatus(item.id)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  orderItem: { padding: 8, borderWidth: 1, marginVertical: 8, borderRadius: 4 },
});

export default OrderManagementScreen;
