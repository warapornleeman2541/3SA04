import React, { useState, useEffect } from 'react';
import { View, Text, ImageBackground, StyleSheet } from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) {

    const apiKey = '6cecb9dd2e369d7e9b5d62bc682150d4'

    const [forecastInfo, setForecastInfo] = useState({
        main: 'main',
        description: 'description',
        temp: 0,
        city: "",
    })

    useEffect(() => {
        console.log('fetching data with zipCode = ${props.zipCode}')
        if (props.zipCode) {

            fetch('http://api.openweathermap.org/data/2.5/weather?q=$%7Bprops.zipCode%7D,th&units=metric&APPID=$%7BapiKey%7D')
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp, 
                        city: json.name,
                    });
                    console.log(forecastInfo)
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
                    <Text style={styles.medium}>Zip Code: {props.zipCode}</Text>
                    <Text style={styles.medium}>city: {forecastInfo.city}</Text>
                    <Forecast {...forecastInfo} />
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