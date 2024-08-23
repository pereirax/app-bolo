import React from 'react';
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import list from '../products.json';

export default function BoloSingle() {
    const { id } = useLocalSearchParams();
    const data = list.listProduct.find((item) => item.id == id);

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image }} />
            <Text style={styles.titleProduct}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F2D8C2',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginBottom: 15,
        alignSelf: 'center',
    },
    titleProduct: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#703B10',
        marginBottom: 10,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        textAlign: 'justify',
        color: '#333',
    },
});
