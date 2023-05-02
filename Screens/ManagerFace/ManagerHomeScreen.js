import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { useEffect, useState } from 'react';
const ManagerHomeScreen = () => {
  const navigation=useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation]);

  const AnimatedText = ({ text, style }) => {
    const [animatedText, setAnimatedText] = useState('');
  
    useEffect(() => {
      let intervalId;
      let i = 0;
  
      intervalId = setInterval(() => {
        setAnimatedText(prevText => prevText + text.charAt(i));
        i++;
  
        if (i === text.length) {
          clearInterval(intervalId);
        }
      }, 100);
      
      return () => clearInterval(intervalId);
    }, [text]);
  
    return <Text style={style}>{animatedText}</Text>;
  };


  const handleMenu = () =>{
    navigation.navigate('Menu');
  }

  const handleOrders = () =>{
    navigation.navigate('Orders');
  }

  const handleDeliveryMen= () =>{
    navigation.navigate('Delivery');
  }

  const handleFeedback = () =>{
    navigation.navigate('Feedback');
  }


  return (
    <View style={{backgroundColor: '#1c1c1c', paddingTop: 100}}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <AnimatedText
          text="Welcome Mr. Chihab !"
          style={{ fontWeight: 'bold', color: 'white', }}
        />
      </View>
      <View style={{paddingTop: 660}}>
        <ScrollView horizontal showHorizontalScrollIndicator={false} style={{ bottom: 0, backgroundColor: '#282828',paddingVertical: 10, width: '100%'}}>
            <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 20}}>
                <TouchableOpacity onPress={handleMenu} style={{justifyContent: 'center', alignItems: "center", marginHorizontal: 30}}>
                    <MaterialIcons name='view-list' size={24} color="#DC143C"/>
                    <Text style={{color:'white', marginTop: 5}}>Menu</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleOrders} style={{justifyContent: 'center', alignItems: "center", marginHorizontal: 10}}>
                    <MaterialIcons name='shopping-cart' size={24} color="#DC143C"/>
                    <Text style={{color:'white', marginTop: 5}}>Orders</Text>
                </TouchableOpacity>
               
                <TouchableOpacity onPress={handleDeliveryMen} style={{justifyContent: 'center', alignItems: "center", marginHorizontal: 10}}>
                    <MaterialIcons name='delivery-dining' size={24} color="#DC143C"/>
                    <Text style={{color:'white', marginTop: 5}}>Delivery-Men</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleFeedback} style={{justifyContent: 'center', alignItems: "center", marginHorizontal: 10}}>
                    <MaterialIcons name='feedback' size={24} color="#DC143C"/>
                    <Text style={{color:'white', marginTop: 5}}>Feedback</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default ManagerHomeScreen