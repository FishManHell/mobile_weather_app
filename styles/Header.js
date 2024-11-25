import {StyleSheet} from "react-native";
import {heightPercentageToDP as hp} from "react-native-responsive-screen";

export const headerStyles = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        alignItems: "flex-end",
        flexDirection: 'row-reverse',
        height: hp(10),
        backgroundColor: 'green',
    }
})