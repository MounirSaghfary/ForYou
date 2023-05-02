import React, { useEffect, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { supabase } from '../../DATABASE/SupaBaseCLient/helper';
import { Button, Input } from 'react-native-elements';
import { Image } from 'react-native';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Login() {
  const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [navigation]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  const signInWithEmail= async (email, password) => {
    try {
      // setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      console.log('user', data.user)
      if (data.user) {
        console.log('email',email)
  console.log('password',password)
        console.log('logged in')
        if(email === 'chihab@gmail.com')
        {
            navigation.navigate('ManagerHomeScreen')
        }
        else if(email === 'kitchen@gmail.com')
        {
            navigation.navigate('Orders')
        }
        else{

          navigation.navigate('Home'); 
        }
        // setLoading(false);
      }
      if (error){
        Alert.alert(error.message);
      setLoading(false);
      }
    } catch (error) {
      Alert.alert(error.message);
      setLoading(false);
    }
  };

  const signUpWithEmail = async () => {
    try {
      setLoading(true);
      const { user, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (user) {
        Alert.alert('success');
        setLoading(false);
        navigation.navigate('Login');
      }
      if (error){
        Alert.alert(error.message);
        setLoading(false);
      }
    } catch (error) {
      Alert.alert(error.message);
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
     

      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          leftIcon={{
            type: 'font-awesome',
            name: 'envelope',
            color: '#DC143C',
            size: 20,
          }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="Email"
          placeholderTextColor="#666"
          autoCapitalize={'none'}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          labelStyle={styles.labelStyle}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputStyle}
          leftIcon={{
            type: 'font-awesome',
            name: 'lock',
            color: '#DC143C',
            size: 20,
          }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#666"
          autoCapitalize={'none'}
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button
          title="Sign in"
          disabled={loading}
          onPress={() => signInWithEmail(email, password)}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Button
          title="Sign up"
          disabled={loading}
          onPress={() => signUpWithEmail()}
          buttonStyle={styles.buttonStyle}
          titleStyle={styles.buttonTitleStyle}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
    backgroundColor: '#333',
    flex: 1,
    justifyContent: 'center',
  },
  labelStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
  inputContainer: {
    borderBottomColor: '#fff',
  },
  inputStyle: {
    color: '#fff',
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: '#DC143C',
    borderRadius: 10,
  },

  buttonTitleStyle: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
