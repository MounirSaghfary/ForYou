import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../../../DATABASE/SupaBaseCLient/helper';
import { useNavigation } from '@react-navigation/native';
import { handleDeleteMenu } from '../../../DATABASE/handlers';

const DeleteMenu = () => {
  const navigation=useNavigation();
  const [dishName, setDishName] = useState('');
  const [dishPrice, setDishPrice] = useState('');
  const [dishDescription, setDishDescription] = useState('');
  const [dishImage, setDishImage] = useState('');
  const [restaurant, setRestaurant] = useState('');

  const onPressDelete = () => {
    handleDeleteMenu(restaurant, dishName, navigation);
    setDishName('');
    setRestaurant('');
    navigation.navigate('ManagerHomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delete Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setDishName(text)}
        value={dishName}
      />


      <TextInput
        style={styles.input}
        placeholder="Restaurant Name (Sushi, FastFood, Italia)"
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setRestaurant(text)}
        value={restaurant}
      />

      <Button style={{color: '#DC143C'}} title="Delete" onPress={onPressDelete} />
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

export default DeleteMenu;
