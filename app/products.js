import React from 'react';
import { Text, ScrollView, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "expo-router";
import list from './products.json';

export default function Products() {
    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>
                Aproveite Nossas Gostosuras
            </Text>

            {list.listProduct.map((item) => (
                <Link
                    key={item.id}
                    href={{
                        pathname: "/BoloSingle/[id]",
                        params: { id: item.id }
                    }}
                    asChild
                >
                    <TouchableOpacity>
                        <View style={styles.itemContainer}>
                            <View style={styles.card}>
                                <Image source={{ uri: item.image }} style={styles.image} />
                            </View>
                            <View style={styles.textContainer}>
                                <Text style={styles.titleProduct}>{item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                                <TouchableOpacity style={styles.buyButton}>
                                    <Text style={styles.buyButtonText}>Comprar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Link>
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 20,
        marginTop: 20,
        color: '#703B10',
        fontSize: 20,
    },
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ffefda',
    },
    itemContainer: {
        marginBottom: 20,
        backgroundColor: '#F2D8C2',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center', // Centraliza o conteúdo no eixo horizontal
    },
    card: {
        borderRadius: 8,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
        marginBottom: 10, // Espaço entre a imagem e o texto
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 8,
    },
    textContainer: {
        alignItems: 'center', // Centraliza o texto e o botão
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
        textAlign: 'center',
    },
    buyButton: {
        marginTop: 10,
        backgroundColor: '#703B10',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 5,
        alignSelf: 'center', // Centraliza o botão dentro do container
    },
    buyButtonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
});







// div= StyleSheet.create({
//     title: {
//         textAlign: 'center', fontWeight: 'bold', marginBottom: 20, marginTop: 20,
//         color: '#703B10', fontSize: 20
//     },
//     container: {
//         flex: 1,
//         padding: 10,
//         backgroundColor: '#ffefda',
//     },
//     itemContainer: {
//         flexDirection: 'row',
//         marginBottom: 10,
//         backgroundColor: '#F2D8C2',
//         borderRadius: 8,
//         padding: 10,
//     },
//     image: {
//         width: 100,
//         height: 100,
//         borderRadius: 8,
//     },
//     textContainer: {
//         flex: 1,
//         marginLeft: 10,
//     },
//     titleProduct: {
//         fontSize: 18,
//         fontWeight: 'bold',
//     },
//     description: {
//         marginTop: 5,
//         fontSize: 14,
//     },
// });
