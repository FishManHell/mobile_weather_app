import React from 'react';
import {Alert, View} from "react-native";
import {footerStyle} from "@/styles/Footer";
import Button from "../Custom/Button";

const Footer = () => {
    return (
        <View style={footerStyle.footer}>
            <Button
                title={"Weather list"}
                onPress={() => Alert.alert('Simple Button pressed')}
                styles={footerStyle}
            />
        </View>
    );
};

export default Footer;