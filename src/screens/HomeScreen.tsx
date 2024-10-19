import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { ContentList, Header, Hero, MenuBreakdown } from '../components';
import { FoodList } from '../__mocks__';


const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        gap: 12
    }
})


export const HomeScreen = ({ navigation }) => {
    const [searchValue, setSearchValue] = useState('')
    const [catFilter, setCatFilter] = useState([])

    useEffect(() => {
        AsyncStorage.getItem('@profile').then(res => !res ? navigation.replace('CreateProfile') : null)
    }, [])

    const setFilters = (item: string) => {
        if(catFilter.includes(item)){
            setCatFilter(() => catFilter.filter(prod => prod !== item))
        } else {
            setCatFilter(() => [...catFilter, item])
        }
    }

    const renderList = () => {
        let filteredList
        if(!catFilter.length){
            filteredList = FoodList
        } else {
            filteredList = FoodList.filter(item => catFilter.includes(item.category))
        }

        return filteredList.filter(q => q.title.toLowerCase().includes(searchValue.toLowerCase()));
    }

    return (
        <View style={styles.mainContainer}>
            <Header onPressProfile={() => navigation.navigate('Profile')} navigation={navigation}/>
            <Hero onChange={setSearchValue} value={searchValue} /> 
            <MenuBreakdown onPress={setFilters} list={[...new Set(FoodList.map(item => item.category))]} activeFilters={catFilter}/>
            <ContentList list={renderList()}/>
        </View>
    )
}