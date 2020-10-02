import React from "react";
import {StatusBar } from "expo-status-bar";
import{View,Text,Flatlist,TouchableHight,Button } from "react-native";
import{useNavigation } from "@react-navigation/native";
const availableZipItems = [
    { place: "Hatyai",code "90110"},
    { place: "Trang",code "92000"},
    { place: "Chiangmai",code "50000"},
    { place: "KhonKaen",code "40000"},
    { place: "Chonburi",code "20000"},
];
const ZipItem = ({ place, code, navigation}) => (
 <TouchableHight
   onpress={() => navigation.navigate("Weather", { zipcode: code})}
>
    <View>
        <Text>{place}</Text>
        <Text>{code}</Text>
    </View>
    </TouchableHight>
);
const _keyExtractor = (item) => item.code;
export defaulf function ZipCodeScreen() {
        const navigation = useNavigation();
        return
        <view>
         <Flatlist
           data={availableZipItems}
           keyExtractor={_keyExtractor}
           renderItems={({ item }) => <ZipItem {...item} navigation={navigation} />}
           />
           <StatusBar style="auto" />
           </view>
           );
}