import React, { FC } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const copyDefault = 'We are a family owned Mediterranean restaurant, focused on traditional receipes served with a modern twist.'

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingHorizontal: 16,
        paddingVertical: 8,
        opacity: 0.7,
        backgroundColor: '#36454F'
    },
    h1Text: {
        fontSize: 24,
        lineHeight: 28,
        fontWeight: '600',
        color: '#EFEFEF'
    },
    h2Text: {
        fontSize: 18,
        lineHeight: 22,
        fontWeight: '400'
    },
    contentContainer: {
        flexDirection: 'row',
        flex: 2
    },
    innerContentCont: {
        flex: 2,
        justifyContent: 'space-around'
    },
    searchContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    inputContainer: {
        flex: 0,
        height: 40,
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8, 
        paddingHorizontal: 8,
    },
    imageContentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        height: 300, 
        width: 100,
        color: '#EFEFEF'
    },
    iconStyle: { 
        width: 32, 
        height: 32, 
        borderRadius: 8 
    },
    infoStyle: {
        fontSize: 16,
        lineHeight: 18,
        fontWeight: "400",
        color: '#EFEFEF'
    }
})

interface HeroProps {
    onChange?: (e: string) => void;
    value?: string;
    enableSearch?: boolean;
    copy?: string;
}

export const Hero: FC<HeroProps> = ({ onChange, value, enableSearch = true, copy = copyDefault }) => {
    return (
        <View style={[styles.mainContainer]}>
            <View style={styles.contentContainer}>
                <View style={styles.innerContentCont}>
                    <Text style={styles.h1Text}>Little lemon {"\n"}<Text style={styles.h2Text}>Chicago</Text></Text>
                    <Text style={styles.infoStyle}>{copy}</Text>
                </View>
                <View style={styles.imageContentContainer}>
                    <Image style={styles.imageStyle} resizeMode='contain' source={require('../../assets/cover.jpg')}/>
                </View>
            </View>
            {enableSearch && <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <Image resizeMode='contain' style={styles.iconStyle} source={require('../../assets/search.webp')}/>
                    <TextInput value={value} placeholder='Search for food!' onChangeText={onChange} placeholderTextColor='#EFEFEF' />
                </View>
            </View>}
        </View>
    )
}