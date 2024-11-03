import React from 'react';
import {View, Text} from 'react-native';

const Temperature = ({completed, id, title}) => {
    return (
        <View>
            <Text>Temperature {completed}-{id}-{title}</Text>
        </View>
    );
};

export default Temperature;