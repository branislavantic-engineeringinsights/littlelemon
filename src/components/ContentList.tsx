import React from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    itemContainer: {
        flexDirection: 'row', 
        flex: 1, 
        borderTopWidth: 1,
        borderTopColor: '#DEDEDE'
    },
    innerContent: {
        flex: 1.5, 
        justifyContent: 'space-around', 
        paddingVertical: 8
    },
    imageCont: {
        flex: 0.8, 
        padding: 16, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
         width: 80, 
        height: 100, 
        borderRadius: 8
    }
})

export const ContentList = ({ list }) => {
    const renderItem = ({ item }) => {
        return (
        <View style={styles.itemContainer}>
            <View style={styles.innerContent}>
                <Text>{item.title}</Text>
                <Text numberOfLines={2}>{item.description}</Text>
                <Text>Pirce: {item.price}</Text>
            </View>
            <View style={styles.imageCont}>
                <Image style={styles.image} resizeMethod='resize' resizeMode='cover' source={item.imgName} />
            </View>
        </View>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={list}
                renderItem={renderItem}
                contentContainerStyle={{ paddingHorizontal: 16 }}
            />
        </View>
    )
}