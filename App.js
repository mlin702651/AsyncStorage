import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Mytabs from './src/Mytabs';
import Mystack from './src/Mystack';
import { SplashScreen } from 'expo';

export default function App() {
  return (
  <Mystack>
  </Mystack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
