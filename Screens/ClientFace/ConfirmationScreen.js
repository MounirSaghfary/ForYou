import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { supabase } from '../../DATABASE/SupaBaseCLient/helper';
import { Alert } from 'react-native';
import { useLayoutEffect } from 'react';
import { handleConfirmPress } from '../../DATABASE/handlers';

const ConfirmationScreen = ({ route, navigation }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash'); // Default payment method is cash

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const { filteredMenuItems,totalPrice} = route.params;


  return (
    <SafeAreaView style={[styles.container, styles.darkBackground]}>
      <Text style={[styles.heading, styles.lightText]}>Confirmation</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.lightText]}
          placeholder="First Name"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setFirstName(text)}
          value={firstName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.lightText]}
          placeholder="Last Name"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setLastName(text)}
          value={lastName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.lightText]}
          placeholder="Address"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setAddress(text)}
          value={address}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, styles.lightText]}
          placeholder="Phone Number"
          placeholderTextColor="#ffffff"
          onChangeText={(text) => setPhoneNumber(text)}
          value={phoneNumber}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={[styles.label, styles.lightText]}>Payment Method:</Text>

        <View style={styles.paymentMethodContainer}>
          <TouchableOpacity
            style={[
              styles.paymentMethodButton,
              paymentMethod === 'cash' && styles.paymentMethodButtonActive,
            ]}
            onPress={() => setPaymentMethod('cash')}>
            <Text
              style={[
                styles.paymentMethodButtonText,
                paymentMethod === 'cash' && styles.paymentMethodButtonTextActive,
                styles.lightText,
              ]}>
              Payment by Cash
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.paymentMethodButton,
              paymentMethod === 'credit_card' && styles.paymentMethodButtonActive,
            ]}
            onPress={() => setPaymentMethod('credit_card')}>
            <Text
              style={[
                styles.paymentMethodButtonText,
                paymentMethod === 'credit_card' && styles.paymentMethodButtonTextActive,
                styles.lightText,
              ]}>
              Payment by Credit Card
            </Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.orderSummaryContainer}>


</View>
<View style={styles.confirmButtonContainer}>
    <TouchableOpacity
      style={styles.confirmButton}
      onPress={() => handleConfirmPress(firstName, lastName, address, phoneNumber, paymentMethod, filteredMenuItems, totalPrice, navigation)}>
      <Text style={[styles.confirmButtonText, styles.lightText]}>
        Confirm Order
      </Text>
    </TouchableOpacity>

</View>
</SafeAreaView>

);
};

const styles = StyleSheet.create({
container: {
flex: 1,
padding: 20,
},
darkBackground: {
backgroundColor: '#1E1E1E',
},
lightText: {
color: 'white',
},
heading: {
fontSize: 28,
fontWeight: 'bold',
marginBottom: 20,
color:'white'
},
inputContainer: {
marginBottom: 20,
},
input: {
paddingVertical: 10,
paddingHorizontal: 10,
borderRadius: 10,
borderWidth: 1,
borderColor: '#FFFFFF',
color:'white'
},
label: {
fontSize: 16,
marginBottom: 10,
color: 'white'
},
paymentMethodContainer: {
flexDirection: 'row',
},
paymentMethodButton: {
paddingVertical: 10,
paddingHorizontal: 20,
borderRadius: 10,
borderWidth: 1,
borderColor: '#FFFFFF',
marginRight: 10,
},
paymentMethodButtonActive: {
backgroundColor: '#DC143C',
},
paymentMethodButtonText: {
fontSize: 16,
},
paymentMethodButtonTextActive: {
color: '#1E1E1E',
fontWeight: 'bold',
},
orderSummaryContainer: {
marginTop: 40,
borderTopWidth: 1,
borderTopColor: '#FFFFFF',
},
orderSummaryHeading: {
fontSize: 24,
marginBottom: 20,
},
orderSummaryItem: {
flexDirection: 'row',
justifyContent: 'space-between',
marginBottom: 10,
},
orderSummaryItemText: {
fontSize: 16,
},
orderSummaryTotalContainer: {
flexDirection: 'row',
justifyContent: 'space-between',
marginTop: 20,
},
confirmButtonContainer: {
flex: 1,
justifyContent: 'flex-end',
},
confirmButton: {
paddingVertical: 15,
backgroundColor: '#DC143C',
borderRadius: 10,
},
confirmButtonText: {
fontSize: 20,
fontWeight: 'bold',
textAlign: 'center',
},
});

export default ConfirmationScreen;
