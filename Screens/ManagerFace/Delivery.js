import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native';
import { supabase } from '../../DATABASE/SupaBaseCLient/helper';
import { useLayoutEffect } from 'react';
import { fetchDeliveryMen } from '../../DATABASE/handlers';

const Delivery = ({ navigation }) => {
  const [deliveryMen, setDeliveryMen] = useState([]);
  const [filteredDeliveryMen, setFilteredDeliveryMen] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    fetchDeliveryMen(setDeliveryMen,setFilteredDeliveryMen);
  }, []);



  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = deliveryMen.filter(
      (deliveryMan) =>
        deliveryMan.FirstName.toLowerCase().includes(query.toLowerCase()) ||
        deliveryMan.LastName.toLowerCase().includes(query.toLowerCase()) ||
        deliveryMan.email.toLowerCase().includes(query.toLowerCase()) ||
        deliveryMan.cin.toLowerCase().includes(query.toLowerCase()) ||
        String(deliveryMan.age).toLowerCase().includes(query.toLowerCase()) ||
        String(deliveryMan.dateofbirth).toLowerCase().includes(query.toLowerCase())
    );
    setFilteredDeliveryMen(filtered);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search" 
          placeholderTextColor="#ffffff"
          onChangeText={(text) => handleSearch(text)}
          value={searchQuery}
        />
        <TouchableOpacity
          style={[styles.addButton, { right: 6 }]}
          onPress={() => navigation.navigate('AddDeliveryMan')}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.addButton, { right: -47 }]}
          onPress={() => navigation.navigate('DeleteDeliveryMan')}
        >
          <Text style={styles.addButtonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listContainer}>
        {filteredDeliveryMen.map((deliveryMan) => (
          <View
            style={styles.itemContainer}
            key={deliveryMan.id}
          >
            <Text style={styles.itemName}>
              {deliveryMan.FirstName} {deliveryMan.LastName}
            </Text>
            <Text style={styles.itemEmail}>{deliveryMan.email}</Text>
            <Text style={styles.itemAge}>Age: {deliveryMan.age}</Text>
            <Text style={styles.itemDateOfBirth}>
              Date of Birth: {deliveryMan.dateofbirth}
            </Text>
            <Text style={styles.itemCin}>CIN: {deliveryMan.cin}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#111',
  },
  searchContainer: {
    paddingHorizontal: 60,
    paddingVertical: 8,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    right: 50,
  },
  searchInput: {
    flex
    : 1,
    height: 40,
    backgroundColor: '#333',
    borderRadius: 20,
    paddingLeft: 15,
    paddingRight: 40,
    color: '#fff',
    },
    addButton: {
    position: 'absolute',
    backgroundColor: '#333',
    borderRadius: 50,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    },
    addButtonText: {
    fontSize: 24,
    color: '#fff',
    },
    listContainer: {
    padding: 30,
    },
    itemContainer: {
    marginBottom: 20,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    paddingBottom: 10,
    },
    itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    },
    itemEmail: {
    fontSize: 14,
    color: '#fff',
    },
    itemAge: {
    fontSize: 14,
    color: '#fff',
    },
    itemDateOfBirth: {
    fontSize: 14,
    color: '#fff',
    },
    itemCin: {
    fontSize: 14,
    color: '#fff',
    },
    });
    
    export default Delivery;
    
    