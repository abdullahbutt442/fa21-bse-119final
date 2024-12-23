import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

interface Transaction {
  id: string;
  amount: string;
  date: string;
}

const transactions: Transaction[] = [
  { id: '1', amount: '$50', date: '2024-01-01' },
  { id: '2', amount: '$30', date: '2024-01-02' },
];

const EarningsScreen: React.FC = () => {
  const totalEarnings = transactions.reduce(
    (sum, transaction) => sum + parseFloat(transaction.amount.slice(1)),
    0
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Earnings</Text>
      <Text>Total Earnings: ${totalEarnings}</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <Text>Amount: {item.amount}</Text>
            <Text>Date: {item.date}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  transactionItem: { padding: 8, borderWidth: 1, marginVertical: 8, borderRadius: 4 },
});

export default EarningsScreen;
