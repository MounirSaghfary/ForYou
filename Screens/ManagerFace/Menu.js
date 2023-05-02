import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../../DATABASE/SupaBaseCLient/helper';
import { ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { fetchMenus } from '../../DATABASE/handlers';
import { filterMenuItems } from '../../RemoteInterface/remoteinterface';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MaterialIcons } from '@expo/vector-icons';


const Menu = () => {
  const navigation=useNavigation();
  const [sushiMenu, setSushiMenu] = useState([]);
  const [fastFoodMenu, setFastFoodMenu] = useState([]);
  const [italiaMenu, setItaliaMenu] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');



  useEffect(() => {
    fetchMenus(setSushiMenu,setFastFoodMenu,setItaliaMenu);
  }, []);

 



  return (
    <ScrollView style={styles.container}>
      <View style={{flexDirection: 'row'}}>
         <Text style={styles.header}>Menu</Text>
         <View style={{paddingRight: 10}}>
          <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('ModifyMenu')}>
               <MaterialIcons name='settings' size={24} />
          </TouchableOpacity>
         </View>
         <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddMenu')}>
             <Text style={styles.addButtonText}>+</Text>
         </TouchableOpacity>
         <View style={{paddingLeft: 10}}>
         <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('DeleteMenu')}>
             <Text style={styles.addButtonText}>-</Text>
         </TouchableOpacity>
         </View>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Search by dish name..."
        placeholderTextColor="#ffffff"
        onChangeText={(text) => setSearchTerm(text)}
        value={searchTerm}
      />

      <Text style={styles.header}>ForYou Sushi:</Text>
      {filterMenuItems(sushiMenu,searchTerm).map((item) => (
        <View style={styles.itemContainer} key={item.id}>
              <TouchableOpacity>
          <ScrollView horizontal style={{ flexDirection: 'row' }}>
            <View>
              <Image style={styles.itemImage} source={{ uri: item.DishImage }} />
            </View>
            <View>
              <Text style={styles.itemName}>{item.DishName}</Text>
              <Text style={styles.itemPrice}>{item.DishPrice} MAD</Text>
              <Text style={styles.itemDescription}>{item.DishDescription}</Text>
            </View>
          </ScrollView>
              </TouchableOpacity>

        </View>
      ))}

      <Text style={styles.header}>ForYou FastFood:</Text>
      {filterMenuItems(fastFoodMenu,searchTerm).map((item) => (
        <View style={styles.itemContainer} key={item.id}>
              <TouchableOpacity>
              <ScrollView horizontal style={{ flexDirection: 'row' }}>
                <View>
                  <Image style={styles.itemImage} source={{ uri: item.DishImage }} />
                </View>
                <View>
                  <Text style={styles.itemName}>{item.DishName}</Text>
                  <Text style={styles.itemPrice}>{item.DishPrice} MAD</Text>
                  <Text style={styles.itemDescription}>{item.DishDescription}</Text>
    </View>
    </ScrollView>
              </TouchableOpacity>
</View>
))}<Text style={styles.header}>ForYou Italia:</Text>
{filterMenuItems(italiaMenu,searchTerm).map((item) => (
  <View style={styles.itemContainer} key={item.id}>
    <TouchableOpacity>
      <ScrollView horizontal style={{ flexDirection: 'row' }}>
        <View>
          <Image style={styles.itemImage} source={{ uri: item.DishImage }} />
        </View>
        <View>
          <Text style={styles.itemName}>{item.DishName}</Text>
          <Text style={styles.itemPrice}>{item.DishPrice} MAD</Text>
          <Text style={styles.itemDescription}>{item.DishDescription}</Text>
        </View>
      </ScrollView>
    </TouchableOpacity>
  </View>
))}
</ScrollView>
);
};

const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#1c1c1c',
paddingHorizontal: 20,
paddingTop: 30,
},
header: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
color: 'white',
paddingRight: 130,
paddingBottom: 10,
},
searchInput: {
borderWidth: 1,
borderColor: '#ddd',
borderRadius: 4,
padding: 10,
marginBottom: 20,
color: 'white'
},
itemContainer: {
marginBottom: 20,
backgroundColor: '#282828',
},
itemImage: {
width: 80,
height: 80,
resizeMode: 'cover',
borderRadius: 10,
marginRight: 10,
},
itemName: {
fontSize: 18,
fontWeight: 'bold',
marginBottom: 5,
color: 'white',
},
itemPrice: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
color: 'green',
},
itemDescription: {
fontSize: 16,
marginBottom: 5,
color: 'white',
},
addButton: {
  width: 50,
  height: 50,
  borderRadius: 8,
  backgroundColor: '#fff',
  justifyContent: 'center',
  alignItems: 'center',
},
addButtonText: {
  fontSize: 32,
},
deleteButtonContainer: {
  alignItems: 'flex-end',
  marginTop: 10,
  paddingRight: 570,
  width: 800,
},
deleteButton: {
  backgroundColor: 'red',
  padding: 10,
  borderRadius: 5,
},
});

export default Menu;






