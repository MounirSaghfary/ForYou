import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({id,imgUrl, title, rating, genre, address, restaurant_description}) => {
  const navigation =useNavigation();

  const handlePress = () => {
    navigation.navigate('Restaurant', { id,imgUrl, title, rating, genre, address, restaurant_description});
  };

  

  return (
    <TouchableOpacity onPress={handlePress} style={{position: 'relative', margin: 10, backgroundColor: "black"}}>

        <Image source={{uri: imgUrl}} style={{height: 150, width: 150, borderRadius: 4}}/>
        <View style={{ paddingHorizontal: 3,paddingBottom: 4}}>
            <Text style={{color: 'white',fontWeight: 'bold', fontSize: 20}}>{title}</Text>
            <View style={{flexDirection: 'row', alignItems: "flex-start"}}>
                  <Icon name="star" type="entypo" color="#8FBC8F" size={15} style={{paddingRight: 7, paddingTop: 3.5}}/> 
                  <Text style={{fontSize: 15, color: "#8FBC8F"}}>
                    <Text style={{color: "#8FBC8F", marginRight: 10, paddingRight: 10}}>{rating}</Text>
                  </Text>
                  <Text style={{color: "white",paddingLeft: 10}}>{genre}</Text>
            </View>

            <View style={{flexDirection: 'row', alignItems: "flex-start", paddingTop: 2}}>
                 <Icon name="location-pin" type="Entypo" color="#8FBC8F" size={15} style={{paddingRight: 7, paddingTop: 4}}/>
                 <Text style={{color: "white",paddingLeft: 10, paddingTop: 2}}>{address}</Text>
            </View>
        </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard 

