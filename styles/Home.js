import {StyleSheet} from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";

export const containerStyle = StyleSheet.create({
    container: {
        width: '100%',
        height: hp(80),
        display: 'flex',
        alignItems: 'center',
        position: 'relative'
    },
})

export const containerHeader = StyleSheet.create({
    header: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1,
    },
    "h1": {
        fontSize: hp(5)
    },
    dateBlock: {
        width: wp(50),
        alignItems: "center",
        marginTop: 10,
        backgroundColor: "#223745",
        paddingHorizontal: 10,
        paddingVertical: 3,
        borderRadius: 10
    },
    "h2": {
        color: "#ffffff",
        fontSize: hp(2.5)
    }
})
export const containerBody = StyleSheet.create({
    body: {
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        flex: 2
    },
    mainTemperatureBlock: {
        flexDirection: "row",
        alignItems: "center"
    },
    temperature: {
        fontSize: hp(17),
    },
    indicatorText: {
        fontSize: hp(5),
    },
    conditionText: {
        fontSize: hp(3),
    },
    weatherDescriptionBlock: {
        backgroundColor: "#223745",
        borderRadius: 10,
        paddingVertical: 20,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: wp(80)
    },
    weatherDescriptionItemBlock: {
        alignItems: "center"
    },
    weatherDescriptionMainText: {
        fontWeight: "600",
        fontSize: hp(2),
        color: "#ffffff"
    },
    weatherDescriptionSecondaryText: {
        fontWeight: "400",
        fontSize: hp(1.5),
        color: "#ffffff"
    },
    weatherDescriptionIcon: {

    }
})

export const containerFooter = StyleSheet.create({
    footer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flex: 1.5,
    },
    item: {
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-around",
    },
    text: {
        fontWeight: "600",
        fontSize: hp(2)
    },
    iconBlock: {
        flexDirection: "row",
        alignItems: "center",
    }
})