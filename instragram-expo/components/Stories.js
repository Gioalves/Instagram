import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import Story from './Story';

export default function Stories() {
  const stories = [
    { id: 1, username: 'gioalves', avatar: require ("../assets/images/giovani.jpeg") },
    { id: 2, username: 'lucas_ruivinha', avatar: require ('../assets/images/lucao-ruiva.jpeg') },
    { id: 3, username: 'thiago_calvao', avatar: require('../assets/images/thiagao.jpeg') },
    { id: 4, username: 'doguinho_feliz', avatar: require('../assets/images/imagem-3.jpg')},
    { id: 5, username: 'van_madona', avatar: require('../assets/images/imagem-4.jpg') },
    { id: 6, username: 'bitoladu', avatar: require('../assets/images/imagem-5.jpg') },
    { id: 7, username: 'ze_rancatoco', avatar: require('../assets/images/imagem-6.jpg') },
  ];

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {stories.map((story) => (
          <Story key={story.id} avatar={story.avatar} username={story.username} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#DBDBDB',
    paddingVertical: 12,
  },
  scrollContent: {
    paddingHorizontal: 16,
  },
});
