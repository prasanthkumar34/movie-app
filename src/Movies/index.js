import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, FlatList, Button, Image } from 'react-native';
import { Avatar, Title, Caption } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons';

const axios = require('axios');


const ListItem = ({ item }) => {
    var date = new Date(item.releasedDate * 1000);
    var format = date.getDate() +
        "/" + (date.getMonth() + 1) +
        "/" + date.getFullYear();
    return (
        <View style={styles.listItem}>
            <View style={{ flex: 1 }}>
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingRight: 4,
                        bottom: 15,
                    }}>
                    <View
                        style={{
                            paddingTop: 5,
                            paddingLeft: 10,
                            fontSize: 23,
                            color: '#05375a',
                        }}>
                        <Ionicons
                            name={'ios-caret-up-sharp'}
                            size={50}
                        />
                        <Text style={{
                            marginLeft: 20
                        }}>{item.totalVoted}</Text>
                        <Ionicons
                            name={'ios-caret-down-sharp'}
                            size={50}
                        />
                    </View>
                    <View style={{
                        paddingTop: 25,
                        paddingRight: 5,
                        color: '#05375a',
                    }}>
                        <Image
                            style={styles.tinyLogo}
                            source={{
                                uri: item.poster,
                            }}
                        />
                    </View>
                    <View
                        style={{
                            paddingTop: 15,
                            fontSize: 23,
                            color: '#05375a',
                        }}>
                        <Text style={styles.boldText}>{item.title}</Text>
                        <Text style={styles.listText}>Genre: {item.genre}</Text>
                        <Text style={styles.listText}>Dir: {item.director}</Text>
                        <Text style={styles.listText}>Mins | {item.language} | {format}</Text>
                        <Text style={styles.listText}>{item.pageViews} views | Voted by {item.totalVoted} people</Text>


                    </View>
                </View>

            </View>
            <View >

            </View>
            <TouchableOpacity
                style={styles.button}
            >
                <Text style={{ fontSize: 17, color: 'white' }}>Watch Trailer</Text>
            </TouchableOpacity>
        </View >
    );
};



export default function movie() {
    const [data, setData] = useState("");
    useEffect(() => {
        axios.post('https://hoblist.com/movieList', {
            category: "movies",
            language: "kannada",
            genre: "all",
            sort: "voting"
        })
            .then(function (response) {
                setData(response.data.result)
            })
            .catch(function (error) {
                console.log(error);
            });

    });
    return (
        <SafeAreaView style={styles.parentView}>
            <FlatList
                style={styles.flatList}
                data={data}
                keyExtractor={item => item.id}
                renderItem={({ item }) => <ListItem item={item} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    parentView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    flatList: {
        width: '100%',
    },
    boldText: {
        fontWeight: "bold",
        color: 'white',
        fontSize: 16,
    },
    listText: {
        color: 'white',
        marginTop: 10
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 350,
        height: 40,
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: '#5FC4A5',
    },
    tinyLogo: {
        width: 60,
        height: 130,
        borderRadius: 5,
    },
    listItem: {
        flex: 1,
        marginRight: 20,
        marginLeft: 20,
        marginTop: 10,
        backgroundColor: '#2c3747',
        padding: 10,
        borderRadius: 5,
    },
});