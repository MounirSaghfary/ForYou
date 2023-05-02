import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { supabase } from '../../../DATABASE/SupaBaseCLient/helper';
import { handleAddDeliveryMan } from '../../../DATABASE/handlers';
import { useNavigation } from '@react-navigation/native';

const AddDeliveryMan = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [cin, setCin] = useState('');
  const navigation =useNavigation();

  const handleAddDeliveryManPress = () => {
    handleAddDeliveryMan(firstName, lastName, email, age, dateOfBirth, cin,navigation); // call the function
  };

  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#ffffff"
          onChangeText={setFirstName}
          value={firstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#ffffff"
          onChangeText={setLastName}
          value={lastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ffffff"
          onChangeText={setEmail}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="Age"
          placeholderTextColor="#ffffff"
          onChangeText={setAge}
          value={age}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          placeholderTextColor="#ffffff"
          onChangeText={setDateOfBirth}
          value={dateOfBirth}
        />
        <TextInput
          style={styles.input}
          placeholder="CIN"
          placeholderTextColor="#ffffff"
          onChangeText={setCin}
          value={cin}
        />
      </View>
      <TouchableOpacity style={styles.addButton} onPress={handleAddDeliveryManPress}>
        <Text style={styles.addButtonText}>Add</Text>
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

export default AddDeliveryMan;
