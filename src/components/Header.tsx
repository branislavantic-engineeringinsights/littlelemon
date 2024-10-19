import React, { FC } from 'react';
import { Image, Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        maxHeight: 45,
        flexDirection: 'row',
        marginTop: 8
    },
    logo: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
    },
    sideSection: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    profileButton: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99
    },
    img: {
        width: 40, 
        height: 40, 
        borderRadius: 20,
        borderWidth: 0.5,
        borderColor: 'green',
        zIndex: -1
    }
})

interface HeaderProps {
    showBackButton?: boolean;
    showProfileButton?: boolean;
    onPressProfile?: () => void;
    disabled?: boolean;
    navigation: any;
}

export const Header: FC<HeaderProps> = ({ showBackButton = false, showProfileButton = true, onPressProfile, disabled, navigation }) => {
    return (
        <View style={styles.mainContainer}>
            <View style={styles.sideSection}>
                {showBackButton && <Pressable onPress={() => navigation.goBack()} style={{width: 40, height: 40, borderRadius: 20, backgroundColor: '#36454F', justifyContent: 'center', alignItems: 'center'}}>
                    <Image style={{ width: 24, height: 24}} source={require('../../assets/back.png')}/>
                </Pressable>}
            </View>
            <View style={styles.logo}><Image style={{ height: 40, width: '80%'}} resizeMode='contain' source={require('../../assets/littleLemonLogo.jpg')}/></View>
            <View style={styles.sideSection}>
                 {showProfileButton && <Pressable onPress={onPressProfile} disabled={disabled} style={styles.profileButton}>
                    <Image resizeMode='contain' style={styles.img} source={require('../../assets/profile.png')}/>    
                </Pressable>}
            </View>
        </View>
    )
}