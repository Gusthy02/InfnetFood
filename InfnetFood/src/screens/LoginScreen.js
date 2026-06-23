import React, { useState, useContext } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

import { AuthContext } from '../context/AuthContext';

export default function LoginScreen() {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    const success = login(email, password);

    if (!success) {
      Alert.alert('Erro', 'Usuário inválido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>InfnetFood</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Senha"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',

    padding: 20,
  },

  title: {
    fontSize: 32,

    fontWeight: 'bold',

    textAlign: 'center',

    marginBottom: 40,
  },

  input: {
    borderWidth: 1,

    padding: 15,

    borderRadius: 10,

    marginBottom: 15,
  },

  button: {
    backgroundColor: '#FF5722',

    padding: 15,

    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',

    textAlign: 'center',

    fontWeight: 'bold',
  },
});
