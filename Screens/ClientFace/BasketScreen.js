import React from 'react';
import { View, Text, TouchableOpacity, FlatList, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { useLayoutEffect } from 'react';

const BasketScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const menuItems = route.params.menuItems;
  const totalPrice = route.params.totalPrice;
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  const filteredMenuItems = menuItems.filter((menuItem) => menuItem.quantity > 0);


  


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1c1c1c' }}>
      <StatusBar barStyle="light-content" />
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 24, textAlign: 'center', paddingTop: 10, color: 'white' }}>Basket</Text>
        <FlatList
          data={filteredMenuItems}
          renderItem={({ item, index }) => (
            <View style={{ backgroundColor: '#282828', padding: 10, marginTop: 10, borderRadius: 5 }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{item.DishName}</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18, color: 'white' }}>{item.DishPrice} MAD</Text>
              </View>
              <Text style={{ color: 'gray', marginVertical: 5 }}>Quantity: {item.quantity}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
      <TouchableOpacity  onPress={() => {console.log('yes1');
        navigation.navigate('ConfirmationScreen',{filteredMenuItems,totalPrice});}}>
        <View
          style={{
            backgroundColor: '#DC143C',
            paddingVertical: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Total Price: {totalPrice} MAD</Text>
        </View>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BasketScreen;
