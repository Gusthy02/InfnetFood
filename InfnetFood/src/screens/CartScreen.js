import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { CartContext } from '../context/CartContext';

export default function CartScreen({ navigation }) {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Carrinho</Text>

      {cart.length === 0 ? (
        <Text style={styles.empty}>Seu carrinho está vazio</Text>
      ) : (
        <>
          <FlatList
            data={cart}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.card}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>Quantidade: {item.quantity}</Text>
                <Text>Valor Unitário: R$ {item.price.toFixed(2)}</Text>
                <Text style={styles.subtotal}>
                  Subtotal: R$ {(item.price * item.quantity).toFixed(2)}
                </Text>
              </View>
            )}
          />

          <Text style={styles.total}>Total: R$ {total.toFixed(2)}</Text>

          <TouchableOpacity style={styles.button} onPress={clearCart}>
            <Text style={styles.buttonText}>Limpar Carrinho</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.checkoutButton]}
            onPress={() => navigation.navigate('Checkout')}>
            <Text style={styles.buttonText}>Ir para Pagamento</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  empty: { fontSize: 18, textAlign: 'center', marginTop: 50 },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: { fontSize: 18, fontWeight: 'bold' },
  subtotal: { marginTop: 5, fontWeight: 'bold' },
  total: { fontSize: 22, fontWeight: 'bold', marginTop: 20, marginBottom: 20 },
  button: {
    backgroundColor: '#FF9800',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButton: { backgroundColor: '#4CAF50', marginTop: 10 },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
