import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from "react-native-paper";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button mode="text" onPress={() => console.log('Pressed')}>
        Press it
      </Button>
    </View>
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

export default HomeScreen;