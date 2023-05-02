import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { supabase } from '../../DATABASE/SupaBaseCLient/helper';
import { MaterialIcons } from '@expo/vector-icons';
import { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';
import { fetchOrders } from '../../DATABASE/handlers';

const Orders = () => {
  const navigation = useNavigation();

  const [orders, setOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchOrders(setOrders);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  const renderOrderItem = ({ item }) => {
    const menuItems = JSON.parse(item.MenuItems);

    const renderMenuItem = (menuItem) => (
      <View style={styles.menuItemContainer}>
        <Image source={{ uri: menuItem.DishImage }} style={styles.menuItemImage} />
        <View style={styles.menuItemDetails}>
          <Text style={styles.menuItemName}>{menuItem.DishName}</Text>
          <Text style={styles.menuItemPrice}>{menuItem.DishPrice} MAD</Text>
          <Text style={styles.menuItemQuantity}>Quantity: {menuItem.quantity}</Text>
        </View>
      </View>
    );

    return (
      <ScrollView style={styles.orderContainer}>
        <View style={styles.orderHeader}>
          <Text style={styles.orderHeaderText}>
            {item.ClientFirstName} {item.ClientLastName}
          </Text>
          <Text style={styles.orderHeaderText}>{item.TotalPrice} MAD</Text>
        </View>
        <Text style={styles.orderText}>Address: {item.Address}</Text>
        <Text style={styles.orderText}>Phone Number: {item.PhoneNumber}</Text>
        <Text style={styles.orderText}>Payment Method: {item.PaymentMethod}</Text>
        <View style={styles.menuItemsContainer}>
          <Text style={styles.menuItemsHeader}>Menu Items:</Text>
          {menuItems.map(renderMenuItem)}
        </View>
      </ScrollView>
    );
  };

  const filteredOrders = orders.filter((order) =>
    order.ClientFirstName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Orders</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#ffffff"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <MaterialIcons name="search" size={24} color="#FFFFFF" />
      </View>
      <FlatList
        data={filteredOrders}
        renderItem={renderOrderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#121212',
    paddingTop: 50,
  },
  header: {
    flexDirection
    : 'row',
    alignItems: 'center',
    marginBottom: 20,
    },
    title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginRight: 10,
    },
    searchInput: {
    backgroundColor: '#FFFFFF',
    height: 40,
    borderRadius: 20,
    padding: 10,
    flex: 1,
    color: '#121212',
    marginRight: 10,
    },
    orderContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    },
    orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    },
    orderHeaderText: {
    fontWeight: 'bold',
    fontSize: 16,
    },
    orderText: {
    marginBottom: 5,
    },
    menuItemsContainer: {
    marginTop: 10,
    },
    menuItemsHeader: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    },
    menuItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    },
    menuItemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
    },
    menuItemDetails: {
    flex: 1,
    },
    menuItemName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    },
    menuItemPrice: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
    color: '#A9A9A9',
    },
    menuItemQuantity: {
    fontSize: 16,
    color: '#A9A9A9',
    },
    });
    
    export default Orders;