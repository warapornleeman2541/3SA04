import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {

  const apikey = '6cecb9dd2e369d7e9b5d62bc682150d4'

  const [ForecastInfo, setForecastInfo] = useState({
      main: 'main',
      description: 'description',
      temp: 0;
      city: "",
  })

  useEffect(() => {
    console.log('fetching data with zipCode = ${props.zipCode}')
    if (props.zipCode){

        fetch('https://api.openweathermap.org/data/2.5/weather?zip=83120,th&units=metric&appid=6cecb9dd2e369d7e9b5d62bc682150d4')
            .then((response) => response.json())
            .then((json) => {
                setForecastInfo({
                    main: json.Weather[0].main,
                    description: json.Weather[0].description,
                    temp: json.main.temp,
                    city:json.name,
                });
                console.log(ForecastInfo)
        })
            .catch((error) => {
                console.warn(error);
        });
    }
}, [props.zipCode])



  return (
    <View>
        <ImageBackground source={require('../bg.jpg')} style={styles.backdrop}>
            <view style={styles.cover}>
                
            </view>
        </ImageBackground>
      <Text onPress={doIt}>Hello world</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
