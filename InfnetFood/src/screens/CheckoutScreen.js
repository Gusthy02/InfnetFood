import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import * as Notifications from 'expo-notifications';

export default function CheckoutScreen() {
  const [cep, setCep] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [loading, setLoading] = useState(false);

  // Integração com API Externa (Tarefa 15)
  const buscarCep = async () => {
    if (cep.length !== 8) return;
    setLoading(true);
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();
      if (!data.erro) {
        setAddress(
          `${data.logradouro}, ${data.bairro} - ${data.localidade}/${data.uf}`
        );
      } else {
        Alert.alert('Erro', 'CEP não encontrado');
      }
    } catch (error) {
      Alert.alert('Erro', 'Falha ao buscar CEP');
    } finally {
      setLoading(false);
    }
  };

  // Notificações (Tarefa 14)
  const sendNotification = async () => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title: 'Pedido Confirmado! 🍔',
        body: 'Seu pedido já está sendo preparado pelo restaurante.',
      },
      trigger: null, // Envia imediatamente
    });
  };

  const finalizar = () => {
    if (!address || !payment) {
      Alert.alert('Atenção', 'Preencha todos os campos obrigatórios.');
      return;
    }
    sendNotification();
    Alert.alert('Sucesso', 'Pedido realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>CEP</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite os 8 dígitos do CEP"
        keyboardType="numeric"
        value={cep}
        onChangeText={setCep}
        onBlur={buscarCep} // Busca o CEP ao sair do campo
        maxLength={8}
      />

      {loading && <ActivityIndicator size="small" color="#FF5722" />}

      <Text style={styles.label}>Endereço de Entrega</Text>
      <TextInput
        style={styles.input}
        placeholder="Rua, Bairro, Cidade..."
        value={address}
        onChangeText={setAddress}
      />

      <Text style={styles.label}>Método de Pagamento</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex: PIX, Cartão de Crédito"
        value={payment}
        onChangeText={setPayment}
      />

      <TouchableOpacity style={styles.button} onPress={finalizar}>
        <Text style={styles.buttonText}>Finalizar Pedido</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginBottom: 20,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});
