import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Titulo() {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/instagram-logo.webp")} style={styles.logo} />
      <View style={styles.iconsContainer}>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="heart-outline" size={28} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Ionicons name="paper-plane-outline" size={28} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
});
