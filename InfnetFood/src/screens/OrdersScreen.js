import React from 'react';

import { View, Text, FlatList, StyleSheet } from 'react-native';

import { orders } from '../data/orders';

export default function OrdersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Meus Pedidos</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text>Pedido #{item.id}</Text>

            <Text>Status: {item.status}</Text>

            <Text>R$ {item.total}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#eee',
    padding: 20,
    marginBottom: 10,
    borderRadius: 10,
  },
});
