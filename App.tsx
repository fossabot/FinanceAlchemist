import * as React from 'react';
import {Platform} from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";
import {NavigationContainer} from "@react-navigation/native";
import AppRoutes from "./navigation/AppRoutes";
import HomeScreen from "./screens/HomeScreen";

const Tab = createMaterialBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        {Platform.OS === 'web' ? (
          <HomeScreen/>
        )
        : (
            <Tab.Navigator>
            {
              AppRoutes.map((r) => (
                <Tab.Screen
                  key={r.name}
                  name={r.name}
                  component={r.component}
                  options={{
                    tabBarIcon: r.icon
                  }}
                />
              ))
            }
          </Tab.Navigator>
          )
        }

      </NavigationContainer>
    </PaperProvider>
  );
}