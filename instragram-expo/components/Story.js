// Arquivo: Story.js (CORRIGIDO)
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function Story({ avatar, username }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.avatarContainer}>
        <View style={styles.gradient}>
          <View style={styles.avatarBorder}>
            {/* CORREÇÃO AQUI: Removido o { uri: ... } */}
            <Image source={avatar} style={styles.avatar} />
          </View>
        </View>
      </View>
      <Text style={styles.username} numberOfLines={1}>
        {username}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginRight: 16,
  },
  avatarContainer: {
    marginBottom: 4,
  },
  gradient: {
    width: 68,
    height: 68,
    borderRadius: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#E1306C',
  },
  avatarBorder: {
    width: 62,
    height: 62,
    borderRadius: 31,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FFFFFF',
  },
  avatar: {
    width: 58,
    height: 58,
    borderRadius: 29,
  },
  username: {
    fontSize: 12,
    color: '#262626',
    maxWidth: 68,
  },
});