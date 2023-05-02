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
import { handleFeedbackSubmit } from '../../DATABASE/handlers';
import { useEffect} from 'react';

const AddFeedbackScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const handleSubmit = async () => {
    await handleFeedbackSubmit(
      firstName,
      lastName,
      feedback,
      rating,
      navigation,
    );

    navigation.navigate('AddFeedbackloading');
  };



  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Feedback</Text>

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

      <View style={styles.inputContainer}>
        <FontAwesome name="comment" size={24} color="#DC143C" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Feedback"
          placeholderTextColor="#8a8a8a"
          multiline
          value={feedback}
          onChangeText={setFeedback}
        />
      </View>

      <View style={styles.inputContainer}>
        <FontAwesome name="star" size={24} color="#DC143C" style={styles.icon} />
        <TextInput
          style={styles.input}
          placeholder="Rating"
          placeholderTextColor="#8a8a8a"
          keyboardType="numeric"
          value={rating}
          onChangeText={setRating}
        />
      </View>

      <TouchableOpacity 
        style={styles.button} 
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Publish</Text>
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
    
    export default AddFeedbackScreen;
