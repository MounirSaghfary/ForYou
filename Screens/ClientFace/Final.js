import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { useLayoutEffect } from 'react';

const Final = () => {
  const [animation, setAnimation] = useState(new Animated.Value(0));
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Feedback'); // navigate to FeedbackScreen after 5 seconds
    }, 5000);

    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: '#1c1c1e' }]}>
      <Animated.View
        style={{
          transform: [{ scale: animation }],
          opacity: animation,
        }}>
        <Icon name="check-circle" size={80} color="green" />
      </Animated.View>
      <Text style={[styles.title, { color: '#fff' }]}>Order Confirmed!</Text>
      <Text style={[styles.subtitle, { color: '#fff' }]}>
        Your Order has been accepted.                       The estimated time of your order: 45-55min.                           Please Leave your Feedback.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center',
  },
});

export default Final;
