import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from '../screens/HomeScreen';
import { CreateProfileScreen } from '../screens/CreateProfileScreen';
import { ProfileScreen } from '../screens/ProfileScreen';


const Stack = createNativeStackNavigator()
export const Navigatior = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Home'} screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Home' component={HomeScreen}  />
                <Stack.Screen name='CreateProfile' component={CreateProfileScreen}/>
                <Stack.Screen name='Profile' component={ProfileScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}