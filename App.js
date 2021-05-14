import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Settings, StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import Landpage from "./src/Landpage/index";
import Login from "./src/Login/index";
import Movies from "./src/Movies/index";
import Register from "./src/Register/index";



import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Movies" component={Landpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
