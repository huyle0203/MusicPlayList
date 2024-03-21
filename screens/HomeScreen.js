import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, SafeAreaView, ScrollView, Image, ImageBackground } from 'react-native';
import React, {Component} from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; //if fonts take too long to load
import { useCallback } from 'react';

const backgroundImg = require("./assets/penguin2.jpg");

export default function HomeScreen() {

  //For customized fonts  
  const [fontsLoaded, fontError] = useFonts({
    'Avenir': require('./assets/fonts/avenir.otf'),
    'Averta': require('./assets/fonts/averta.ttf'),
    'Arquitecta': require('./assets/fonts/arquitecta.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  //return background image
  return (
    <View style={styles.container}>
    <ImageBackground source={backgroundImg} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>Penguin</Text>
    </ImageBackground>
  </View>

  );
}

 const TextInputComponent = () => {
  const [text, setText] = useState('');

  return (
    <View style = {styles.textbox}>
      <TextInput
        style = {styles.input}
        onChangeText = {setText}
        value = {text}
        placeholder = "Chat with Vibby..."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});



