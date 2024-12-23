import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: string;
}

const products: Product[] = [
  { id: '1', name: 'Product 1', price: '$10' },
  { id: '2', name: 'Product 2', price: '$20' },
];

const ProductListScreen: React.FC<{ navigation: any }> = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Products</Text>
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.product}
          onPress={() => navigation.navigate('ProductDetail', { product: item })}
        >
          <Text>{item.name}</Text>
          <Text>{item.price}</Text>
        </TouchableOpacity>
      )}
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  product: { padding: 16, borderWidth: 1, marginBottom: 8, borderRadius: 4 },
});

export default ProductListScreen;
