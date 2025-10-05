import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import Login from './components/Login';
import Titulo from './components/Titulo';
import Stories from './components/Stories';
import Feed from './components/Feed';
import Menu from './components/Menu';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Login onLogin={() => setIsLoggedIn(true)} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Titulo />
        <Stories />
        <Feed />
      </View>
      <Menu />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  content: {
    flex: 1,
  },
});
