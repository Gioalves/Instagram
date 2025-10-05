import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Menu() {
  const [activeTab, setActiveTab] = useState('home');

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tab}
        onPress={() => setActiveTab('home')}
      >
        <Ionicons
          name={activeTab === 'home' ? 'home' : 'home-outline'}
          size={28}
          color="#000"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => setActiveTab('search')}
      >
        <Ionicons
          name={activeTab === 'search' ? 'search' : 'search-outline'}
          size={28}
          color="#000"
        />
      </TouchableOpacity>


      <TouchableOpacity 
      style={styles.tab}
      onPress={() => setActiveTab('add')}
      >
      <Ionicons name="add-circle-outline" size={28} color="#000" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tab}
        onPress={() => setActiveTab('reels')}
      >
        <Ionicons
          name={activeTab === 'reels' ? 'play-circle' : 'play-circle-outline'}
          size={28}
          color="#000"
        />
      </TouchableOpacity>

  
      <TouchableOpacity
        style={styles.tab}
        onPress={() => setActiveTab('profile')}
      >
        <View
          style={[
            styles.profileImageContainer,
            activeTab === 'profile' && styles.profileImageActive,
          ]}
        >
          <Image source={require("../assets/images/giovani.jpeg")} style={styles.profileImage} /> 
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#DBDBDB',
    paddingVertical: 8,
    paddingBottom: 20,
  },
  tab: {
    padding: 8,
  },
  profileImageContainer: {
    width: 28,
    height: 28,
    borderRadius: 14,
    overflow: 'hidden',
  },
  profileImageActive: {
    borderWidth: 2,
    borderColor: '#000',
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});
