import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CartItem({ item }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text>Quantidade: {item.quantity}</Text>
      <Text>Valor Unitário: R$ {item.price.toFixed(2)}</Text>
      <Text style={styles.subtotal}>
        Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  subtotal: {
    marginTop: 5,
    fontWeight: 'bold',
    color: '#FF5722'
  }
});