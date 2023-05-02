import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import 'react-native-url-polyfill/auto';
import Login from './Screens/Authentification/Login';
import HomeScreen from './Screens/ClientFace/Home';
import Home from './Screens/ClientFace/Home';
import RestaurantScreen from './Screens/ClientFace/RestaurantScreen';
import BasketScreen from './Screens/ClientFace/BasketScreen';
import ConfirmationScreen from './Screens/ClientFace/ConfirmationScreen';
import Final from './Screens/ClientFace/Final';
import Feedback from './Screens/CommonFace/Feedback';
import AddFeedback from './Screens/CommonFace/AddFeedback';
import ManagerHomeScreen from './Screens/ManagerFace/ManagerHomeScreen';
import Delivery from './Screens/ManagerFace/Delivery';
import Orders from './Screens/ManagerFace/Orders';
import Menu from './Screens/ManagerFace/Menu';
import AddDeliveryMan from './Screens/ManagerFace/Components/AddDeliveryMan';
import AddMenu from './Screens/ManagerFace/Components/AddMenu';
import onboarding from './Screens/OnBoarding/onboarding';
import Opening from './Screens/Opening';
import DeleteFeedback from './Screens/CommonFace/DeleteFeedback';
import DeleteFeedbackloading from './Screens/CommonFace/DeleteFeedbackloading';
import AddFeedbackloading from './Screens/CommonFace/AddFeedbackloading';
import DeleteMenu from './Screens/ManagerFace/Components/DeleteMenu';
import DeleteDeliveryMan from './Screens/ManagerFace/Components/DeleteDeliveryMan';
import ModifyMenu from './Screens/ManagerFace/Components/ModifyMenu';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Opening">
      <Stack.Screen name="Opening" component={Opening} />
      <Stack.Screen name="onboarding" component={onboarding} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Restaurant" component={RestaurantScreen} />
        <Stack.Screen name="BasketScreen" component={BasketScreen} />
        <Stack.Screen name="ConfirmationScreen" component={ConfirmationScreen} />
        <Stack.Screen name="Final" component={Final} />
        <Stack.Screen name="Feedback" component={Feedback} />
        <Stack.Screen name="AddFeedback" component={AddFeedback} />
        <Stack.Screen name="DeleteFeedback" component={DeleteFeedback} />
        <Stack.Screen name="DeleteFeedbackloading" component={DeleteFeedbackloading} />
        <Stack.Screen name="AddFeedbackloading" component={AddFeedbackloading} />
        <Stack.Screen name="ManagerHomeScreen" component={ManagerHomeScreen} />
        <Stack.Screen name="Delivery" component={Delivery} />
        <Stack.Screen name="AddDeliveryMan" component={AddDeliveryMan} />
        <Stack.Screen name="DeleteDeliveryMan" component={DeleteDeliveryMan} />
        <Stack.Screen name="Orders" component={Orders} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="AddMenu" component={AddMenu} />
        <Stack.Screen name="DeleteMenu" component={DeleteMenu} />
        <Stack.Screen name="ModifyMenu" component={ModifyMenu} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

