import AsyncStorage from '@react-native-async-storage/async-storage';
import Rect, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, ButtonType, Header } from '../components';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        gap: 8
    },
    personalInfoCont: {
        flex: 1,
        padding: 16,
        borderColor: 'gray',
        borderRadius: 16,
        borderWidth: 0.5,
        gap: 16
    },
    h1: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '600'
    },
    avatarCont: {
        flex: 0,
        flexDirection: 'row',
    },
    imageCont: {
        flex: 1,
        gap: 8
    },
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: '#394c45',
        borderWidth: 0.5
    },
    avatarButtons: {
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
        paddingHorizontal: 16
    },
    inputSectionCont: {
        gap: 8,
    },
    inputLabel: {
        fontSize: 20,
        lineHeight: 24,
        fontWeight: '400'
    },
    input: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 8
    }
})

export const ProfileScreen = ({ navigation }) => {
    const [profileData, setProfileData] = useState(null)
    
    useEffect(() => {
        const loadProfile = async () => {
            const profile = await AsyncStorage.getItem('@profile')
            setProfileData(JSON.parse(profile))
        }
        loadProfile()
    }, [])

    const deleteProfile = async () => {
        await AsyncStorage.removeItem('@profile')
        navigation.goBack()
    }

    return (
        <View style={styles.mainContainer}>
            <Header showBackButton navigation={navigation}/>
            <View style={styles.personalInfoCont}>
                {profileData ?
                    <>
                    <Text style={styles.h1}>Personal information!</Text>
                    <View style={styles.avatarCont}>
                        <View style={styles.imageCont}>
                            <Text>Avatar</Text>
                            <Image style={styles.imageStyle} source={require('../../assets/profile.png')}/>
                        </View>
                        <View style={styles.avatarButtons}>
                            <Button buttonText='Change' type={ButtonType.PRIMARY} />
                            <Button buttonText='Remove' type={ButtonType.SECONDARY} />
                        </View>
                    </View>
                        {Object.entries(profileData).map(([k, v], i) =>{ 
                            return (
                                <View key={`${String(i) + v as string}`} style={styles.inputSectionCont}>
                                    <Text style={styles.inputLabel}>{k}</Text>
                                    <TextInput 
                                        value={v as string}
                                        editable={false}
                                        style={styles.input}
                                    />
                            </View>
                            )
                        })}
                        <Button buttonText='Log Out!' type={ButtonType.TERTIARY} onPress={deleteProfile}/>
                    </>
                : 
                        <Text style={styles.h1}>Please create your profile!</Text>
                }
            </View>
        </View>
    )
}