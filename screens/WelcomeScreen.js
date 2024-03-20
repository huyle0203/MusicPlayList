import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert, Button, SafeAreaView, ScrollView, Image } from 'react-native';
import React, {Component} from 'react';
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen'; //if fonts take too long to load
import { useCallback } from 'react';

const logoImg = require("./assets/penguin.png");

export default function WelcomeScreen() {

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

  return (
    <SafeAreaView className="bg-red-600" >
      <ScrollView style = {styles.scrollView}>
      <View style= {[styles.container, {backgroundColor: '#42CAF5' }]} onLayout={onLayoutRootView}>
      <Text style = {styles.heading}>Welcome back, Name</Text>
      <Text style = {styles.subHeading}>Tell Vibby how you feel</Text>
      <Text style = {styles.subHeading}>& Vibby will make you a playlist</Text>
      <Image source = {logoImg} style ={{width: 100, height: 100}}/>
      <TextInputComponent />
      <View>
      <Button
        onPress = {() => navigation.navigate("Welcome")} 
        title="Make A Playlist"
        // color="#00A5E6"
        font = "Averta"
        style = {styles.buttonMain} 
      />
      </View>
      <StatusBar style="auto" />
    </View>
      </ScrollView>
    </SafeAreaView>
    
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
    backgroundColor: '#42CAF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // text: {
  //   fontSize: 42,
  // },
  containerBar: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: '#42CAF5',
    marginHorizontal: 20,
  },
  textbox: {
    // flex: 1,
    display: 'flex',
    width: 329,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  buttonMain: {
    display: 'flex',
    width: 329,
    height: 54,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: '#00ae56',
    fontFamily: 'Averta',
  },
  heading: {
    fontFamily:'Avenir',
    fontWeight: 'bold',
    fontSize: 29,
    marginBottom: 10,
  },
  subHeading: {
    fontFamily: 'Averta',
    //fontWeight: 'bold',
    color: '#3C3C43',
    textAlign: 'center',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: 20,
    marginBottom: 10,
    lineHeight: 15,
  },
  // image: {
  //   width: 200,
  //   height: 200,
  //   marginBottom: 20,
  // },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    fontFamily: 'Averta',
    color: '#3C3C43',
  },
});



