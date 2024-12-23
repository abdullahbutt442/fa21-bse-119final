import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SellerDashboardScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seller Dashboard</Text>
      <Button
        title="Manage Listings"
        onPress={() => navigation.navigate('ProductListing')}
      />
      <Button
        title="Manage Orders"
        onPress={() => navigation.navigate('OrderManagement')}
      />
      <Button
        title="View Earnings"
        onPress={() => navigation.navigate('Earnings')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  button: { marginBottom: 8 },
});

export default SellerDashboardScreen;
