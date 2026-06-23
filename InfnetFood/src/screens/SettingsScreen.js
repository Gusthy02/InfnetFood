import React, { useContext } from 'react';

import { View, Text, Switch } from 'react-native';

import { ThemeContext } from '../context/ThemeContext';

export default function SettingsScreen() {
  const { dark, toggleTheme } = useContext(ThemeContext);

  return (
    <View
      style={{
        flex: 1,

        padding: 20,
      }}>
      <Text>Modo Escuro</Text>

      <Switch value={dark} onValueChange={toggleTheme} />
    </View>
  );
}
