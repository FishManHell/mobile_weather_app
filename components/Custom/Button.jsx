import React from 'react';
import {Pressable, Text} from "react-native";

const Button = ({onPress, title, styles}) => {
    return (
        <Pressable style={styles?.button} onPress={onPress}>
            <Text style={styles?.text}>{title}</Text>
        </Pressable>
    );
};

export default Button;