import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
    Picker
} from "react-native";

const App = ({ navigation }) => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [prof, setProf] = useState("");

    const storeData = async (value) => {
        try {
            await AsyncStorage.setItem('@storage_Key', value)
        } catch (e) {
            console.log("Error")
        }
    }

    return (
        <View style={styles.container}>

            <StatusBar style="auto" />
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Username."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setName(email)}
                />
            </View>

            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Password."
                    placeholderTextColor="#003f5c"
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Email."
                    placeholderTextColor="#003f5c"
                    onChangeText={(email) => setEmail(email)}
                />
            </View>
            <View style={styles.inputView}>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Phone number."
                    placeholderTextColor="#003f5c"
                    onChangeText={(phone) => setPhone(phone)}
                />
            </View>

            <View style={styles.inputView1}>
                <Picker
                    selectedValue={prof}
                    style={{ height: 50, width: 150 }}
                    onValueChange={(itemValue, itemIndex) => setProf(itemValue)}
                >
                    <Picker.Item label="Student" value="Student" />
                    <Picker.Item label="Software Developer" value="Software Developer" />
                    <Picker.Item label="Cloud Developer" value="Cloud Developer" />
                    <Picker.Item label="Movie Director" value="Movie Director" />

                </Picker>
            </View>

            <TouchableOpacity style={styles.loginBtn} onPress={() =>
                navigation.navigate('Login', { name: 'Jane' })
            }>
                <Text style={styles.loginText}>Register</Text>
            </TouchableOpacity>
        </View>


    );
};

export default App;

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flex: 1,
        backgroundColor: "#2c3747",
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        marginBottom: 40,
    },

    inputView: {
        backgroundColor: "#5FC4A5",
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,

        alignItems: "center",
    },
    inputView1: {
        backgroundColor: "#5FC4A5",
        borderRadius: 30,
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },

    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },

    forgot_button: {
        height: 30,
        marginBottom: 30,
    },

    loginBtn: {
        width: "80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#00855c",
    },
});