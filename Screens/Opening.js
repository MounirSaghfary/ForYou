import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


class Opening extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('onboarding');
    }, 5000);
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logo}  source={require('../assets/logo.png')}
        resizeMode="contain" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});

export default function(props) {
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return <Opening {...props} />;
}
