import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/home';

export default function App() {
  return (
    <>
    <Home />
    <StatusBar
      translucent
      backgroundColor="transparent"
      barStyle="light-content"
    />
    </>
  );
}

