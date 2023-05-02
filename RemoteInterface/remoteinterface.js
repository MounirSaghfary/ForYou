import { handleFeedbackSubmit } from "../DATABASE/handlers";
import { useNavigation } from "@react-navigation/native";
import { calculateUpdatedMenuItemsWithPlus, calculatetotalWithPlus,calculateUpdatedMenuItemsWithMinus, calculatetotalWithMinus } from "../Intelligence/Intelligence";



export const filterFeedbacks = (setFilteredFeedbacks,feedbacks,rating) => {
    if (rating === '') {
      setFilteredFeedbacks(feedbacks);
    } else {
      setFilteredFeedbacks(feedbacks.filter((feedback) => feedback.rating.toString() === rating.toString()));
    }
  };


export const filterMenuItems = (menuItems,searchTerm) => {
    return menuItems.filter((item) =>
      item.DishName.includes(searchTerm)
    );
  };



  export const getColor = (rating) => {
    if (rating >= 4) {
      return '#8BC34A'; // green
    } else if (rating >= 3) {
      return '#FFC107'; // yellow
    } else {
      return '#F44336'; // red
    }
  };




  export const onPlusPress = (index, menuItems, setMenuItems, setTotalPrice, setBasketVisible, totalPrice) => {
    const updatedMenuItems = calculateUpdatedMenuItemsWithPlus(index, menuItems);
    const newTotalPrice = calculatetotalWithPlus(totalPrice, updatedMenuItems[index].DishPrice);
    
    setMenuItems(updatedMenuItems);
    setTotalPrice(newTotalPrice);
    setBasketVisible(true);
  };
  


  export const onMinusPress = (index, menuItems, setMenuItems, setTotalPrice, setBasketVisible, totalPrice) => {
    const updatedMenuItems = calculateUpdatedMenuItemsWithMinus(index, menuItems);
    const newTotalPrice = calculatetotalWithMinus(totalPrice, updatedMenuItems[index].DishPrice);
    
    setMenuItems(updatedMenuItems);
    setTotalPrice(newTotalPrice);
    
    if (newTotalPrice === 0) {
      setBasketVisible(false);
    }
  };
