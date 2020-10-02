import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Forecast(props) {
    return (
        <View style={styles.center}>
            <Text style={styles.medium}>{props.main}</Text>
            <Text style={styles.small}>{props.description}</Text>
        <View>
            <Text style={styles.medium}>
                <Text style={{fontSize: 40}}>{prop.temp}</Text>
                <Text> °C</Text>  
            </Text>
        </Viex>
    </Viex>
    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    small: {
        fontSize: 30,
        color: '#FFF',
        marginTop: 30,
    }
})