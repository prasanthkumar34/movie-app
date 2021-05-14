import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { Settings, StyleSheet, Text, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Movie from 'react-native-vector-icons/MaterialIcons';

import Movies from "../Movies/index";
import Setting from "../Settings/index";
import Login from "../Login/index";

function HomeScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Movies />
            {/* <Login /> */}
        </View>
    );
}

function SettingsScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Setting />
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function App() {

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    if (route.name === 'Home') {
                        return (
                            <Movie
                                name={
                                    focused
                                        ? 'local-movies'
                                        : 'local-movies'
                                }
                                size={size}
                                color={color}
                            />
                        );
                    } else if (route.name === 'Company Info') {
                        return (
                            <Ionicons
                                name={focused ? 'ios-information-circle' : 'ios-information'}
                                size={size}
                                color={color}
                            />
                        );
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: '#5FC4A5',
                inactiveTintColor: 'gray',
                style: {
                    backgroundColor: '#1c222b',//color you want to change
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Company Info" component={SettingsScreen} />
        </Tab.Navigator>
    );
}