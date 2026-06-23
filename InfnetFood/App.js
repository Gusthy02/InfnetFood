import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthNavigator from './src/navigation/AuthNavigator';
import { AuthProvider } from './src/context/AuthContext';
import { CartProvider } from './src/context/CartContext';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {

return (

<AuthProvider>

<CartProvider>

<ThemeProvider>

<NavigationContainer>

<AuthNavigator/>

</NavigationContainer>

</ThemeProvider>

</CartProvider>

</AuthProvider>

);

}