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
            <View style={styles.cover}>
               <Text style={styles.medium}>zip Code: {props.zipCode}</Text>
               <Text style={styles.medium}>city: {ForecastInfo.city}</Text>
               <Forecast {...ForecastInfo} />  
            </View>
        </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
  cover: {
      backgroundColor: '#000',
      width: '100%',
      height: 500,
      opacity: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
  },
  medium: {
      fontSize: 25,
      color: 'red',
  }
});
