// Arquivo: Foto.js (CORRIGIDO)
import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function Foto({ username, avatar, image, likes, caption }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header da postagem */}
      <View style={styles.header}>
        <View style={styles.userInfo}>
          {/* CORREÇÃO AQUI */}
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.username}>{username}</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="ellipsis-vertical" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Imagem da postagem */}
      {/* CORREÇÃO AQUI */}
      <Image source={image} style={styles.postImage} />

      {/* Ações da postagem */}
      <View style={styles.actions}>
        <View style={styles.leftActions}>
          <TouchableOpacity onPress={() => setLiked(!liked)} style={styles.actionButton}>
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={28}
              color={liked ? '#ED4956' : '#000'}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={26} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="paper-plane-outline" size={26} color="#000" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setSaved(!saved)}>
          <Ionicons
            name={saved ? 'bookmark' : 'bookmark-outline'}
            size={26}
            color="#000"
          />
        </TouchableOpacity>
      </View>

      {/* Curtidas */}
      <View style={styles.likesContainer}>
        <Text style={styles.likes}>
          Curtido por <Text style={styles.bold}>voce</Text> e outras{' '}
          <Text style={styles.bold}>{likes} pessoas</Text>
        </Text>
      </View>

      {/* Legenda */}
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>
          <Text style={styles.bold}>{username}</Text> {caption}
        </Text>
      </View>
    </View>
  );
}

// ... (os styles continuam os mesmos)
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EFEFEF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  username: {
    fontSize: 14,
    fontWeight: '600',
    color: '#262626',
  },
  postImage: {
    width: width,
    height: width,
    backgroundColor: '#EFEFEF',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginRight: 16,
  },
  likesContainer: {
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  likes: {
    fontSize: 14,
    color: '#262626',
  },
  bold: {
    fontWeight: '600',
  },
  captionContainer: {
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  caption: {
    fontSize: 14,
    color: '#262626',
    lineHeight: 18,
  },
});