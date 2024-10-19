import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Navigatior } from './src/navigation/Navigator';

export default function App() {
  return (
    <SafeAreaView style={styles.container} >
      <StatusBar />
      <Navigatior />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
