import * as React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import {Button} from "react-native-paper";
import { HomeRoute } from "../navigation/AppRoutes";

interface SettingsScreenProps {
  navigation: any;
}

const SettingsScreen : React.FC<SettingsScreenProps> = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button mode="text" onPress={() => navigation.navigate(HomeRoute.name)}>
        Go to Home
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

export default SettingsScreen;