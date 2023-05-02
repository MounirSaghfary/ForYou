import React, { useState } from "react";
import { View, Text, Image, StatusBar } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import { SIZES,COLORS } from "./theme";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from 'react';
import { slides } from "../../DATABASE/handlers";



export default function onboarding() {
  const navigation=useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  StatusBar.setBarStyle('light-content', true);
  StatusBar.setBackgroundColor(COLORS.primary);

  const buttonLabel = (label) => {
    return(
      <View style={{
        padding: 12
      }}>
        <Text style={{
          color: COLORS.white,
          fontWeight: '600',
          fontSize: SIZES.h4,
        }}>
          {label}
        </Text>
      </View>
    )
  }

  const styles = {
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 15,
      paddingTop: 100,
      backgroundColor: "#1c1c1c"
    },
    image: {
      width: SIZES.width - 80,
      height: 400,
    },
    title: {
      fontWeight: 'bold',
      color: COLORS.white,
      fontSize: SIZES.h1,
    },
    description: {
      textAlign: 'center',
      paddingTop: 5,
      color: COLORS.white,
    }
  }

  return(
    <AppIntroSlider
      data={slides}
      renderItem={({item}) => {
        return(
          <View style={styles.container}>
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>
              {item.title}
            </Text>
            <Text style={styles.description}>
              {item.description}
            </Text>
          </View>
        )
      }}
      activeDotStyle={{
        backgroundColor: COLORS.primary,
        width: 30,
      }}
      showSkipButton
      renderNextButton={() => buttonLabel("Next")}
      renderSkipButton={() => buttonLabel("Skip")}
      renderDoneButton={() => buttonLabel("Done")}
      onDone={() => {navigation.navigate("Login");
    }}
    />
    )
    }
       
