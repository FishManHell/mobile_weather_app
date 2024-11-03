import React from 'react';
import {Text, View, Button, StyleSheet } from 'react-native';

const headerStyles = StyleSheet.create({
    header: {
        padding: "0 5px",
        height: 40,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: 'row-reverse',
        backgroundColor: '#000',
    }
})

const Header = () => {
    return (
        <View style={headerStyles.header}>
            <Text style={{color: "white"}}>Weather app</Text>
            <Button title={"Burger"} onPress={() => console.log("TESt")}/>
        </View>
    )
};

export default Header;