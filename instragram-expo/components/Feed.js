// Arquivo: Feed.js (ATUALIZADO)
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Foto from './Foto';

export default function Feed() {
  const posts = [
    {
      id: 1,
      username: 'lucas_ruivinha',
      // Usando a mesma imagem para avatar e post
      avatar: require('../assets/images/lucao-ruiva.jpeg'),
      image: require('../assets/images/lucao-ruiva.jpeg'),
      likes: 102,
      caption: 'Esperando a tampa da minha panela aparecer bem safadinha ❤️',
    },
    {
      id: 2,
      username: 'lucas_ruivinha',
      avatar: require('../assets/images/lucao-ruiva.jpeg'),
      image: require('../assets/images/lucao-palmeiras.jpeg'),
      likes: 87,
      caption: 'Realizando um sonho de criança que é vestir esse manto 🤪',
    },
    {
      id: 3,
      username: 'thiago_calvao',
      avatar: require('../assets/images/thiagao.jpeg'),
      image: require('../assets/images/thiagao.jpeg'),
      likes: 254,
      caption: 'Dei uma lustrada na careca hoje! ✨',
    },
     {
      id: 4,
      username: 'doguinho_feliz',
      avatar: require('../assets/images/imagem-3.jpg'),
      image: require('../assets/images/imagem-3.jpg'),
      likes: 981,
      caption: 'A felicidade em um olhar! 🐶🎾',
    },
  ];

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {posts.map((post) => (
        <Foto
          key={post.id}
          username={post.username}
          avatar={post.avatar}
          image={post.image}
          likes={post.likes}
          caption={post.caption}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
});