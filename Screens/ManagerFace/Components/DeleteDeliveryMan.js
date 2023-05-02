import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { supabase } from '../../../DATABASE/SupaBaseCLient/helper';
import { handleDeleteDeliveryMan } from '../../../DATABASE/handlers';
import { useNavigation } from '@react-navigation/native';

const DeleteDeliveryMan = () => {
  const [cin, setCin] = useState('');
  const navigation =useNavigation();

  const handleDeleteDeliveryManPress = () => {
    handleDeleteDeliveryMan(cin); // call the function
    navigation.navigate('ManagerHomeScreen');
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="CIN"
          placeholderTextColor="#ffffff"
          onChangeText={setCin}
          value={cin}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleDeleteDeliveryManPress}>
        <Text style={styles.addButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    padding: 16,
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: '#222',
    color: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 18,
    marginBottom: 16,
  },
  addButton: {
    width: '100%',
    height: 64,
    borderRadius: 8,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    fontSize: 32,
  },
});

export default DeleteDeliveryMan;
