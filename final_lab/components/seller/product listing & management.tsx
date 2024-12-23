import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: string;
  stock: string;
}

const ProductListingScreen: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [stock, setStock] = useState<string>('');

  const addProduct = () => {
    setProducts((prev) => [
      ...prev,
      { id: Date.now().toString(), name, price, stock },
    ]);
    setName('');
    setPrice('');
    setStock('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Product Listing</Text>
      <TextInput
        style={styles.input}
        placeholder="Product Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        value={price}
        onChangeText={setPrice}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Stock"
        value={stock}
        onChangeText={setStock}
        keyboardType="numeric"
      />
      <Button title="Add Product" onPress={addProduct} />
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>Price: {item.price}</Text>
            <Text>Stock: {item.stock}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, marginBottom: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16, borderRadius: 4 },
  productItem: { padding: 8, borderWidth: 1, marginVertical: 8, borderRadius: 4 },
});

export default ProductListingScreen;
