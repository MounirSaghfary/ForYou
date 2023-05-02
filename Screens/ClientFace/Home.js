import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity} from 'react-native'
import React, { Component, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import {useEffect, useLayoutEffect} from 'react'; 
import { Image } from 'react-native';
import { SafeAreaView} from 'react-native-safe-area-context';
import { Icon } from '@rneui/themed';
import { color } from '@rneui/themed/dist/config';
import Categories from './Rows/Categories';
import FeaturedRow from './Rows/FeaturedRow';
import FeaturedRow2 from './Rows/FeaturedRow2';


const Home = () => {
    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);



    return (
        <SafeAreaView style={{ backgroundColor: '#303030', flex: 1 }}>
            <View style={{display: 'flex', flexDirection: 'row', paddingBottom: 50, paddingTop: 50,alignItems: 'flex-start', marginHorizontal: 4}}>
                <View>
                    <Text style={{color: 'lightgray',fontSize: 15, paddingLeft: 10}}>
                        Order now!
                    </Text>
                    <Text style={{color: 'white', fontSize: 20,fontWeight: 'bold', marginRight: 20, paddingLeft: 10}}>
                            Book Your Table!  
                        <TouchableOpacity>                
                            <Icon  name="chevron-down" type="entypo" color="#00CCBB" style={{marginRight: 70,paddingLeft: 1}}/> 
                        </TouchableOpacity> 
                                     
                    </Text>
                </View>
            </View>



            <ScrollView style={{height: 620, backgroundColor: '#303030'}}>
                <Categories/>
                <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid placements for our partners"
                />
              <FeaturedRow
                    id="123"
                    title="Featured"
                    description="Paid placements for our partners"
                />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
