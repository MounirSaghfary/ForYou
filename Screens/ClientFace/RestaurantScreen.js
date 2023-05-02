import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { Icon } from '@rneui/themed';
import { supabase } from '../../DATABASE/SupaBaseCLient/helper';
import { ReadMenu } from '../../DATABASE/handlers';
import { Alert } from 'react-native';
import { onPlusPress,onMinusPress } from '../../RemoteInterface/remoteinterface';
import { calculateTotalPrice } from '../../Intelligence/Intelligence';


const RestaurantScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const dishId = route.params.id;
  const imgUrl = route.params.imgUrl;
  const title = route.params.title;
  const rating = route.params.rating;
  const genre = route.params.genre;
  const address = route.params.address;
  const restaurant_description = route.params.restaurant_description;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const [basketVisible, setBasketVisible] = useState(false);


  useEffect(() => {
    ReadMenu(title, setMenuItems, setLoading);
  }, [title]);


  const total = calculateTotalPrice(menuItems);
  


  return (
    <View style={{ flex: 1, backgroundColor:'#1c1c1c' }}>
      <ScrollView>
        <SafeAreaView>
          <Image source={{ uri: imgUrl }} style={{ height: 300, backgroundColor: 'gray' }} />
          <View style={{ backgroundColor: '#1c1c1c' }}>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30, paddingLeft: 10 }}>{title}</Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingBottom: 10,
              alignItems: 'flex-start',
              marginHorizontal: 4,
              backgroundColor: '#1c1c1c',
            }}>
            <Icon name="star" type="entypo" color="#8FBC8F" size={15} style={{ paddingLeft: 7, paddingTop: 3.5 }} />
            <Text style={{ fontSize: 15, color: '#8FBC8F' }}>
              <Text style={{ color: '#8FBC8F', fontWeight: 'bold' }}>{rating}</Text> ({genre})
              </Text>
      </View>
      <View style={{ backgroundColor: '#1c1c1c', padding: 10 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Description</Text>
        <Text style={{ color: 'white' }}>{restaurant_description}</Text>
      </View>
      <View style={{ backgroundColor: '#1c1c1c', padding: 10 }}>
        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Menu</Text>
      </View>
      {menuItems.map((menuItem, index) => (
        <View
          key={menuItem.id}
          style={{
            backgroundColor: '#1c1c1c',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#eaeaea',
            display: 'flex',
            flexDirection: 'row',
          }}>
          <View style={{ flex: 1, backgroundColor:'#282828' }}>
          <Image
source={{ uri: menuItem.DishImage }}
style={{ height: 70, width: 70, borderRadius: 5, marginRight: 10, backgroundColor: 'gray' }}
/>
            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>{menuItem.DishName}</Text>
            <Text style={{ color: 'gray' }}>{menuItem.DishDescription}</Text>
            <Text style={{ color: 'white', fontWeight: 'bold', paddingTop: 5 }}>{menuItem.DishPrice} MAD</Text>
          </View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {menuItem.quantity ? (
              <TouchableOpacity
                onPress={() => {
                  onMinusPress(index, menuItems, setMenuItems, setTotalPrice, setBasketVisible, totalPrice);
                }}
                style={{
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ fontWeight: 'bold', color:'white' }}>-</Text>
              </TouchableOpacity>
            ) : null}
            {menuItem.quantity ? (
              <View
                style={{
                  borderWidth: 1,
                  borderColor: '#eaeaea',
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{ fontWeight: 'bold', color:'white'}}>{menuItem.quantity}</Text>
              </View>
            ) : null}
            <TouchableOpacity
              onPress={() => {
                onPlusPress(index, menuItems, setMenuItems, setTotalPrice, setBasketVisible, totalPrice);
              }}
              style={{
                borderWidth: 1,
                borderColor: '#eaeaea',
                width: 30,
                height: 30,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{ fontWeight: 'bold', color:'white' }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </SafeAreaView>
  </ScrollView>
  {basketVisible ? (
    <TouchableOpacity
      onPress={() => {
        console.log('yes1');
        navigation.navigate('BasketScreen', { menuItems: menuItems, totalPrice});
      }}
      style={{
        backgroundColor: '#DC143C',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>
        Checkout {total} MAD
      </Text>
    </TouchableOpacity>
  ) : null}
</View>
  )}

  export default RestaurantScreen;