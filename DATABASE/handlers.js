import { check, check2, check3 } from "../Intelligence/Intelligence";
import { supabase } from "./SupaBaseCLient/helper";



export const ReadMenu = async (title, setMenuItems, setLoading, setMenuItemsError) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from(`${title}`).select('*');
      console.log(data);
      if (data) {
        setMenuItems(data);
      }
      if (error) {
        setMenuItemsError(error.message);
      }
    } catch (error) {
      setMenuItemsError(error.message);
    } finally {
      setLoading(false);
    }
  };


  export const handleConfirmPress = async (firstName, lastName, address, phoneNumber, paymentMethod, filteredMenuItems, totalPrice, navigation) => {
    // Insert order into the orders table in Supabase
      
    const order = {
      ClientFirstName: firstName,
      ClientLastName: lastName,
      Address: address,
      PhoneNumber: phoneNumber,
      PaymentMethod: paymentMethod,
      MenuItems: filteredMenuItems,
      TotalPrice: totalPrice,
    };
    console.log(order);

    if (!check(firstName, lastName, address, phoneNumber)) {
      // Stop execution if check fails
      return;
    }
    
  
    const { data: insertData, error: insertError } = await supabase
      .from('Orders')
      .insert(order)
      .single();
  
    if (insertError) {
      console.log('Error inserting order into database:', insertError.message);
      // Handle error (e.g. show an alert to the user)
    } else {
      console.log('Order inserted into database:', insertData);
      navigation.navigate('Final');
      // Navigate back to the Basket screen (e.g. using navigation.goBack())
      
      // Define the table and the age threshold in minutes
      const table = 'Orders';
      const ageInMinutes = 5;
  
      // Calculate the timestamp cutoff
      const now = new Date();
      const cutoffTimestamp = now.getTime() - ageInMinutes * 60 * 1000;
  
      // Delete records older than the cutoff
      const { data: deleteData, error: deleteError } = await supabase
        .from(table)
        .delete()
        .match({ created_at: { '$lt': new Date(cutoffTimestamp).toISOString() } });
  
      if (deleteError) {
        console.log('Error deleting old orders:', deleteError.message);
        // Handle error (e.g. show an alert to the user)
      } else {
        console.log('Old orders deleted:', deleteData);
      }
    }
  };
  

  export const fetchFeedbacks = async (setFeedbacks,setFilteredFeedbacks) => {
    const { data, error } = await supabase.from('Feedback').select('*');
    if (error) {
      console.log(error);
    } else {
      console.log(data)
      setFeedbacks(data);
      setFilteredFeedbacks(data);
    }
  };

  export const handleFeedbackSubmit = async (
    firstName,
    lastName,
    feedback,
    rating,
    navigation,
  ) => {
 
    if (!check2(firstName, lastName, feedback, rating)) {
      // Stop execution if check fails
      return;
    }
  
    const { data, error } = await supabase
      .from('Feedback')
      .insert({
        ClientFirstName: firstName,
        ClientLastName: lastName,
        feedback: feedback,
        rating: rating,
      })
      .single();
  
    console.log(data);
  
    if (error) {
      console.log(error);
      return;
    } else {
      console.log(data);
    }
  };

  export const handleFeedbackDelete = async (
    firstName,
    lastName,
  ) => {
    if (!check3(firstName, lastName)) {
      // Stop execution if check fails
      return;
    }
    const { data, error } = await supabase
      .from('Feedback')
      .delete()
      .eq('ClientFirstName', firstName)
      .eq('ClientLastName', lastName);
  
    if (error) {
      console.log(error);
      return;
    } else {
      console.log(data);
    }
  };
  

export const fetchOrders = async (setOrders) => {
    const { data: orders, error } = await supabase.from('Orders').select('*');

    if (error) {
      console.log(error);
    } else {
      console.log(orders)
      setOrders(orders);
    }
  };


export  const getSushiMenu = async () => {
    const { data, error } = await supabase.from('ForYou Sushi').select('*');
    if (error) throw error;
    return data;
  };

export const getFastFoodMenu = async () => {
    const { data, error } = await supabase.from('ForYou FastFood').select('*');
    if (error) throw error;
    return data;
  };

export  const getItaliaMenu = async () => {
    const { data, error } = await supabase.from('ForYou Italia').select('*');
    if (error) throw error;
    return data;
  };

export  const fetchMenus = async (setSushiMenu,setFastFoodMenu,setItaliaMenu) => {
    const sushiData = await getSushiMenu();
    const fastFoodData = await getFastFoodMenu();
    const italiaData = await getItaliaMenu();
    setSushiMenu(sushiData);
    setFastFoodMenu(fastFoodData);
    setItaliaMenu(italiaData);
  };



export const fetchDeliveryMen = async (setDeliveryMen,setFilteredDeliveryMen) => {
    const { data, error } = await supabase.from('Delivery-Men').select('*');
    if (error) {
      console.log('Error fetching delivery men', error);
      return;
    }
    setDeliveryMen(data);
    setFilteredDeliveryMen(data);
  };



  export const handleAddMenu = async (restaurant, dishName, dishPrice, dishDescription, dishImage, navigation) => {
    const { data, error } = await supabase.from(`ForYou ${restaurant}`).insert({
      DishName: dishName,
      DishPrice: dishPrice,
      DishDescription: dishDescription,
      DishImage: dishImage,
    });
    if (error) {
      console.log('Error adding menu item:', error);
      return;
    }
    console.log('Menu item added successfully:', data);
  };

  export const Modify1 = async (olddishName,oldrestaurant) => {
    const { data, error } = await supabase.from(`ForYou ${oldrestaurant}`).delete()
    .eq('DishName', olddishName)
    if (error) {
      console.log('Error adding menu item:', error);
      return;
    }
    console.log('Menu item added successfully:', data);
  
  };

  export const Modify2 = async (restaurant, dishName, dishPrice, dishDescription, dishImage) => {
    const { data, error } = await supabase.from(`ForYou ${restaurant}`).insert({
      DishName: dishName,
      DishPrice: dishPrice,
      DishDescription: dishDescription,
      DishImage: dishImage,
    });
    if (error) {
      console.log('Error adding menu item:', error);
      return;
    }
    console.log('Menu item added successfully:', data);
  
  };

  export const handleModifyMenu = async (olddishName, oldrestaurant, restaurant, dishName, dishPrice, dishDescription, dishImage) => {
    await Modify1(olddishName, oldrestaurant);
    await Modify2(restaurant, dishName, dishPrice, dishDescription, dishImage);
  };

  export const handleDeleteMenu = async (restaurant, dishName) => {
  const { data, error } = await supabase.from(`ForYou ${restaurant}`).delete()
    .eq('DishName', dishName)
    if (error) {
      console.log('Error adding menu item:', error);
      return;
    }
    console.log('Menu item added successfully:', data);
  };




  export const handleAddDeliveryMan = async (firstName, lastName, email, age, dateOfBirth, cin,navigation) => {
    try {
      const { data, error } = await supabase
        .from('Delivery-Men')
        .insert([{ FirstName: firstName, LastName: lastName, email: email, age: age, dateofbirth: dateOfBirth, cin: cin}]);
      if (error) {
        console.log('Error adding delivery man', error);
      }
      else{
        console.log('yes');
        navigation.navigate('ManagerHomeScreen');
      }
    } catch (error) {
      console.log('Error adding delivery man', error);
    }
  };

  export const handleDeleteDeliveryMan = async (cin) => {
    try {
      const { data, error } = await supabase
        .from('Delivery-Men').delete().eq('cin', cin)
      if (error) {
        console.log('Error adding delivery man', error);
      }
      else{
        console.log('yes');
      }
    } catch (error) {
      console.log('Error adding delivery man', error);
    }
  };
  
  


export const slides = [
    {
      id: 1,
      title: 'Discover ForYou Restaurant',
      description: '“ForYou Restaurant Ifrane is a cozy and charming eatery located in the heart of Ifrane, Morocco. It offers a delightful blend of Moroccan and international cuisine, prepared with the freshest ingredients by skilled chefs. With its warm atmosphere, attentive service, and delicious dishes, ForYou Restaurant is a must-visit for anyone looking for a memorable dining experience in Ifrane."',
      image: source={uri: 'https://github.com/shevon14/Tasty-FoodDeliveryApp/blob/master/src/assets/onboardScreen1.png?raw=true'}
    },
    {
      id: 2,
      title: 'Choose A Tasty Dish',
      description: '“Treat yourself to a flavorful journey with our delicious menu of fresh and carefully crafted dishes. Indulge in savory appetizers, satisfying entrees, and tempting desserts that will satisfy your cravings and delight your senses."',
      image: source={uri: 'https://github.com/shevon14/Tasty-FoodDeliveryApp/blob/master/src/assets/onboardScreen2.png?raw=true'}
    },
    {
      id: 3,
      title: 'Pay on Delivery',
      description: '“Simply place your order, sit back and relax, and our friendly delivery team will bring your delicious meal right to your door. With our secure payment options and reliable delivery service, you can enjoy your food without any worries."',
      image: source={uri: 'https://github.com/shevon14/Tasty-FoodDeliveryApp/blob/master/src/assets/onboardScreen3.png?raw=true'}
    }
  ]