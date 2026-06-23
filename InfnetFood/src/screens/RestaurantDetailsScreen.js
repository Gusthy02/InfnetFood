import React from 'react';

import { View, Text, Image } from 'react-native';

export default function RestaurantDetailsScreen({ route }) {
  const restaurant = route.params;

  return (
    <View
      style={{
        flex: 1,

        padding: 20,
      }}>
      <Image
        source={{
          uri: restaurant.image,
        }}
        style={{
          height: 250,
        }}
      />

      <Text
        style={{
          fontSize: 24,

          fontWeight: 'bold',
        }}>
        {restaurant.name}
      </Text>

      <Text>{restaurant.address}</Text>

      <Text>Hambúrguer Artesanal</Text>

      <Text>R$ 35</Text>
    </View>
  );
}
