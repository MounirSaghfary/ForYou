import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet 
} from 'react-native';
import { supabase } from '../../DATABASE/SupaBaseCLient/helper';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { handleFeedbackDelete, handleFeedbackSubmit } from '../../DATABASE/handlers';
import { useEffect} from 'react';

const DeleteFeedback = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);



  const handleSubmit = async () => {
    await handleFeedbackDelete(
      firstName,
      lastName,
    );
    navigation.navigate('DeleteFeedbackloading');

  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Delete Feedback</Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#DC143C" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          placeholderTextColor="#8a8a8a"
          value={firstName}
          onChangeText={setFirstName}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="user" size={24} color="#DC143C" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          placeholderTextColor="#8a8a8a"
          value={lastName}
          onChangeText={setLastName}
        />
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2d2d2d',
    padding: 20,
    paddingTop: 50
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10},
    icon: {
    marginRight: 10
    },
    input: {
    flex: 1,
    height: 50,
    color: '#fff',
    borderBottomWidth: 1,
    borderColor: '#fff'
    },
    button: {
    backgroundColor: '#DC143C',
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30
    },
    buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
    }
    });
    
    export default DeleteFeedback;
