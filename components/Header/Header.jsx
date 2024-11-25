import React from 'react';
import {Alert, Text, View} from 'react-native';
import {headerStyles} from "@/styles/Header";
import Button from "@/components/Custom/Button";

const Header = () => {
    return (
        <View style={headerStyles.header}>
            <Text style={{color: "white"}}>Weather app</Text>
            <Button title={"Burger menu"} onPress={() => Alert.alert('Simple Button pressed')} />
        </View>
    )
};

export default Header;