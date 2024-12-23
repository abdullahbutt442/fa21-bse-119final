import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Product {
  id: string;
  name: string;
  price: string;
}

const ProductDetailScreen: React.FC<{ route: any; navigation: any }> = ({ route, navigation }) => {
  const { product }: { product: Product } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.name}</Text>
      <Text>{product.price}</Text>
      <Button title="Add to Cart" onPress={() => navigation.navigate('Cart')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, marginBottom: 16 },
});

export default ProductDetailScreen;
