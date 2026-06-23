import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CartScreen from '../screens/CartScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import OrdersScreen from '../screens/OrdersScreen';
import RestaurantsScreen from '../screens/RestaurantsScreen';
import RestaurantDetailsScreen from '../screens/RestaurantDetailsScreen';
import CheckoutScreen from '../screens/CheckoutScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="Produtos" component={ProductsScreen} />

      <Stack.Screen name="Detalhes" component={ProductDetailsScreen} />

      <Stack.Screen name="Carrinho" component={CartScreen} />

      <Stack.Screen name="Perfil" component={ProfileScreen} />

      <Stack.Screen name="Pedidos" component={OrdersScreen} />

      <Stack.Screen name="Restaurantes" component={RestaurantsScreen} />

      <Stack.Screen name="Restaurante" component={RestaurantDetailsScreen} />

      <Stack.Screen name="Checkout" component={CheckoutScreen} />

      <Stack.Screen name="Configurações" component={SettingsScreen} />
    </Stack.Navigator>
  );
}
