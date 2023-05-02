import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../../../DATABASE/SupaBaseCLient/helper';
import { useNavigation } from '@react-navigation/native';
import { handleModifyMenu } from '../../../DATABASE/handlers';

const ModifyMenu = () => {
  const navigation=useNavigation();
  const [olddishName, setoldDishName] = useState('');
  const [dishName, setDishName] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishImage, setDishImage] = useState('');
  const [oldrestaurant, setoldRestaurant] = useState('');
  const [restaurant, setRestaurant] = useState('');


  const onPressAdd = () => {
    handleModifyMenu(olddishName, oldrestaurant, restaurant, dishName, dishPrice, dishDescription, dishImage);
    setDishName('');
    setDishPrice('');
    setDishDescription('');
    setDishImage('');
    setRestaurant('');
    setoldDishName('');
    setoldRestaurant('');
    navigation.navigate('ManagerHomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Modify Menu Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Restaurant of the Dish you Would Like to Modify"
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setoldRestaurant(text)}
        value={oldrestaurant}
      />

      <TextInput
        style={styles.input}
        placeholder="Dish Name of the dish you would like to modify"
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setoldDishName(text)}
        value={olddishName}
      />

      <TextInput
        style={styles.input}
        placeholder="New Dish Name"
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setDishName(text)}
        value={dishName}
      />

      <TextInput
        style={styles.input}
        placeholder="New Dish Price"
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setDishPrice(text)}
        value={dishPrice}
      />

      <TextInput
        style={styles.input}
        placeholder="New Description"
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setDishDescription(text)}
        value={dishDescription}
      />

      <TextInput
        style={styles.input}
        placeholder="New Image URL"
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setDishImage(text)}
        value={dishImage}
      />

      <TextInput
        style={styles.input}
        placeholder="New Restaurant Name (Sushi, FastFood, Italia)"
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setRestaurant(text)}
        value={restaurant}
      />

      <Button style={{color: '#DC143C'}} title="Modify" onPress={onPressAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1c1c1c'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    color: 'white',
  },
});

export default ModifyMenu;
