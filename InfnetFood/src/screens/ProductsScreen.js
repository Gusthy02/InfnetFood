import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { products } from '../data/products';

export default function ProductsScreen({ route, navigation }) {
  const categoryName = route.params.name;

  // Filtra os produtos pela categoria clicada na Home
  const filteredProducts = products.filter((p) => p.category === categoryName);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>

      {filteredProducts.length === 0 ? (
        <Text style={styles.empty}>Nenhum produto nesta categoria.</Text>
      ) : (
        <FlatList
          data={filteredProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('Detalhes', item)}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>R$ {item.price.toFixed(2)}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  empty: { fontSize: 16, color: '#666', textAlign: 'center', marginTop: 20 },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
  },
  image: { width: 100, height: 100 },
  info: { padding: 15, justifyContent: 'center', flex: 1 },
  name: { fontSize: 18, fontWeight: 'bold' },
  price: { fontSize: 16, color: '#4CAF50', marginTop: 5, fontWeight: 'bold' },
});
