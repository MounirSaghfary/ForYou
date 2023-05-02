import { Alert } from "react-native";
export const calculateTotalPrice = (menuItems) => {
    let totalPrice = 0;
    menuItems.forEach((item) => {
      if (item.quantity) {
        totalPrice += item.DishPrice * item.quantity;
      }
    });
    return totalPrice;
  };

  export const calculateUpdatedMenuItemsWithPlus = (index, menuItems) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index].quantity = updatedMenuItems[index].quantity ? updatedMenuItems[index].quantity + 1 : 1;
    return updatedMenuItems;
  };
  
  export const calculatetotalWithPlus = (totalPrice, dishPrice) => {
    return totalPrice + dishPrice;
  };

  export const calculateUpdatedMenuItemsWithMinus = (index, menuItems) => {
    const updatedMenuItems = [...menuItems];
    updatedMenuItems[index].quantity = updatedMenuItems[index].quantity - 1;
    return updatedMenuItems;
  };
  
  export const calculatetotalWithMinus = (totalPrice, dishPrice) => {
    return totalPrice - dishPrice;
  };


  export const check = (firstName, lastName, address, phoneNumber)=>{
    if (!firstName || !lastName || !address || !phoneNumber) {
      Alert.alert('Error', 'Please fill in all the fields');
      return false;
    }
    return true;
  }


  
  export const check2 = (firstName, lastName, feedback, rating)=>{
    if (!firstName || !lastName || !feedback || !rating) {
      Alert.alert('Error', 'Please fill in all the fields');
      return false;
    }
    return true;
  }


    
  export const check3 = (firstName, lastName)=>{
    if (!firstName || !lastName) {
      Alert.alert('Error', 'Please fill in all the fields');
      return false;
    }
    return true;
  }