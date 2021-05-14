import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Settings, StyleSheet, Text, View, } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function App() {

    return (
        <View style={styles.Container}>
            <Text style={styles.Topic}>Company Info </Text>
            <Text style={styles.Title}>Geeksynergy Technologies Pvt Ltd</Text>
            <Text style={styles.title}>Address: Sanjayanagar, Bengaluru-56</Text>
            <Text style={styles.title}> Phone: XXXXXXXXX09
Email: XXXXXX@gmail.com </Text>

        </View >);
}


const styles = StyleSheet.create({
    Container: {
        flex: 1,
        width: 400,
        alignItems: 'center',
        backgroundColor: '#2c3747',
    },
    Topic: {
        marginTop: 90,
        color: '#5FC4A5',
        fontSize: 46,
        fontWeight: "bold",
    },
    Title: {
        marginTop: 100,
        justifyContent: 'center',
        color: '#5FC4A5',
        fontSize: 20,
        fontWeight: "bold",
    },
    title: {
        color: '#5FC4A5',

    }
});