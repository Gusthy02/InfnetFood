import React from 'react';
import {
  View,
  FlatList,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
} from 'react-native';
import { restaurants } from '../data/restaurants';

export default function RestaurantsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Imagem simulando um mapa (Tarefa 8) */}
      <Image
        source={{
          uri: 'https://miro.medium.com/v2/resize:fit:1200/1*qYUvh-dpTqwUC-zQzM2iDQ.jpeg',
        }}
        style={styles.mapImage}
      />

      <Text style={styles.title}>Restaurantes Próximos</Text>

      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Restaurante', item)}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.address}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  mapImage: { width: '100%', height: 200, borderRadius: 10, marginBottom: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: {
    padding: 20,
    backgroundColor: '#eee',
    marginBottom: 15,
    borderRadius: 10,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
});
