import React, { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Header, Hero } from '../components';
import { Button, ButtonType } from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        gap: 8
    },
    headerContainer: {
        flex: 1,
        height: 50
    },
    heroContainer: {
        flex: 1,
        height: 200
    },
    inputSectionCont: {
        flex: 1,
        gap: 8,
        paddingHorizontal: 16
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
        borderRadius: 8
    }
})

export const CreateProfileScreen = ({ navigation, copy }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const verifyFieldsAndSaveProfile = async () => {
        if(!firstName.trim() || !lastName.trim() || !email.trim() || !phoneNumber.trim()){
            Alert.alert('Alert', 'Please fill all fields')
            return;
        }

        const profile =  {
            'First name': firstName,
            'Last name': lastName,
            'Email': email,
            'Phone number': phoneNumber
        }

        await AsyncStorage.setItem('@profile', JSON.stringify(profile))
        navigation.navigate('Home')

    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={100}>
        <ScrollView style={{ height: '100%'  }}>
            <View style={styles.mainContainer}>
            <View style={styles.headerContainer}>
            <Header showProfileButton={false} navigation={navigation}/>
            </View>
            <View style={styles.heroContainer}>
                <Hero enableSearch={false} copy='Join our family, please create your personalized profile!'/>
            </View>
            <View style={styles.inputSectionCont}>
                <Text style={styles.inputLabel}>First name *</Text>
                <TextInput 
                    placeholder='Type in you first name!' 
                    onChangeText={setFirstName}
                    value={firstName}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputSectionCont}>
                <Text style={styles.inputLabel}>Last name *</Text>
                <TextInput 
                    placeholder='Type in you last name!' 
                    onChangeText={setLastName}
                    value={lastName}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputSectionCont}>
                <Text style={styles.inputLabel}>Email *</Text>
                <TextInput 
                    placeholder='Type in you email!' 
                    onChangeText={setEmail}
                    value={email}
                    style={styles.input}
                />
            </View>
            <View style={styles.inputSectionCont}>
                <Text style={styles.inputLabel}>Phone number *</Text>
                <TextInput 
                    placeholder='Type in you phone number!' 
                    onChangeText={setPhoneNumber}
                    value={phoneNumber}
                    style={styles.input}
                />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 16, marginTop: 16 }}>
                <Button buttonText='Save changes!' type={ButtonType.PRIMARY} onPress={verifyFieldsAndSaveProfile}/>
            </View>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}