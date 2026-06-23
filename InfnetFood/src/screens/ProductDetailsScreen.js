import React, { useState, useContext } from 'react';

import { View, Text, Image, TouchableOpacity } from 'react-native';

import { CartContext } from '../context/CartContext';

export default function ProductDetailsScreen({ route }) {
  const product = route.params;

  const [qty, setQty] = useState(1);

  const { addItem } = useContext(CartContext);

  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addItem({
      ...product,
      quantity: qty,
    });

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  return (
    <View
      style={{
        flex: 1,

        padding: 20,
      }}>
      <Image
        source={{
          uri: product.image,
        }}
        style={{
          height: 250,
        }}
      />

      <Text>{product.name}</Text>

      <Text>{product.description}</Text>

      <Text>R$ {product.price}</Text>

      <Text>Quantidade</Text>

      <View
        style={{
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => setQty(qty - 1)}>
          <Text>-</Text>
        </TouchableOpacity>

        <Text>{qty}</Text>

        <TouchableOpacity onPress={() => setQty(qty + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleAdd}
        style={{
          backgroundColor: added ? '#4CAF50' : '#FF5722',

          padding: 15,

          borderRadius: 10,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
          }}>
          {added ? 'Adicionado' : 'Adicionar ao Carrinho'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
