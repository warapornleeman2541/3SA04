//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Weather from './components/Weather'
import WeatherScreen from './components/WeatherScreen'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ZipCodeScreen from './components/ZipCodeScreen';

const Stack = createStackNavigator();

// create a component
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={ZipCodeScreen} />
        <Stack.Screen name="Weather" component={WeatherScreen} />
      </Stack.Navigator> 
    </NavigationContainer>       
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
});

//make this component available to the app
export default App;