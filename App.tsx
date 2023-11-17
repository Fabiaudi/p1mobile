import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Home } from './src/screens/Home';
import { Limite } from './src/screens/Limite';

export default function App() {
  return (
    <>
      {/* <Home /> */}
      <Limite />
      <StatusBar style="auto" />
    </>
  );
}

