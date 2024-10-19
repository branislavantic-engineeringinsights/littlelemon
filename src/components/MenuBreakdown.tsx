import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 0,
        paddingHorizontal: 16,
        gap: 8,
        paddingBottom: 8
    },
    h1Text: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '600',
        color: 'black'
    },
    itemStyle: {
        flex: 0,
        paddingHorizontal: 16,
        backgroundColor: '#DEDEDE',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16
    }
})

export const MenuBreakdown = ({onPress, list = ['Starters', 'Mains'], activeFilters}) => {

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => onPress(item)} style={[styles.itemStyle, activeFilters.includes(item) && { backgroundColor: 'gray'}]}>
                <Text>{item}</Text>
            </TouchableOpacity>
        )
    }
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.h1Text}>Order for delivery!</Text>
            <FlatList 
                data={list}
                renderItem={renderItem}
                horizontal={true}
                contentContainerStyle={{ gap: 16 }}
            />
        </View>
    )
}