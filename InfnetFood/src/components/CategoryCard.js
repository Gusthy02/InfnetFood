import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function CategoryCard({ category, onPress, isDark }) {
  return (
    <TouchableOpacity 
      style={[styles.card, { backgroundColor: isDark ? '#555' : '#ededed' }]} 
      onPress={onPress}
    >
      <Text style={[styles.text, { color: isDark ? '#fff' : '#000' }]}>
        {category.name}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    marginTop: 15,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});