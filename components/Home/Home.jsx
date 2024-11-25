import React from 'react';
import {View, Text, Image} from 'react-native';
import {formatVisibility, getDateTime} from "@/helpers/functions";
import useFetch from "../../hooks/useFetch";
import {containerBody, containerFooter, containerHeader, containerStyle} from "@/styles/Home";
import {baseGetWeatherWeekUrl, defaultGetWeatherQuery} from "@/helpers/api";

const Home = ({name, main, weather, wind, visibility, coord}) => {
    const severalDaysQuery = new URLSearchParams({...coord, ...defaultGetWeatherQuery}).toString();
    const severalDays = coord && useFetch(`${baseGetWeatherWeekUrl}${severalDaysQuery}`, {method: "GET"});

    const nextDays = severalDays?.data?.daily?.slice(0, 3)
    const {dayOfWeek: currentDay, month: currentMonth, numberDay: currentNumberDay} = getDateTime(new Date());

    const {h1, dateBlock, h2, header} = containerHeader
    const {
        body,
        mainTemperatureBlock,
        temperature,
        indicatorText,
        conditionText,
        weatherDescriptionBlock,
        weatherDescriptionItemBlock,
        weatherDescriptionMainText,
        weatherDescriptionSecondaryText,
    } = containerBody
    const {
        footer,
        item,
        text,
        iconBlock
    } = containerFooter

    return (
        <View style={containerStyle.container}>
            <View style={header}>
                <Text style={h1}>{name}</Text>
                <View style={dateBlock}>
                    <Text style={h2}>{currentDay}, {currentNumberDay} {currentMonth}</Text>
                </View>
            </View>
            <View style={body}>
                <View style={mainTemperatureBlock}>
                    <Text style={temperature}>{parseInt(main?.temp)}</Text>
                    <View>
                        <Text style={indicatorText}>&#8451;</Text>
                        <Text style={conditionText}>{weather?.[0]?.main}</Text>
                    </View>
                </View>
                <View style={weatherDescriptionBlock}>
                    <View style={weatherDescriptionItemBlock}>
                        <Image/>
                        <Text style={weatherDescriptionMainText}>{main?.humidity}%</Text>
                        <Text style={weatherDescriptionSecondaryText}>Humidity</Text>
                    </View>
                    <View style={weatherDescriptionItemBlock}>
                        <Image/>
                        <Text style={weatherDescriptionMainText}>{wind?.speed}km/h</Text>
                        <Text style={weatherDescriptionSecondaryText}>Wind</Text>
                    </View>
                    <View style={weatherDescriptionItemBlock}>
                        <Image/>
                        <Text style={weatherDescriptionMainText}>{formatVisibility(visibility)}</Text>
                        <Text style={weatherDescriptionSecondaryText}>Visibility</Text>
                    </View>
                </View>
            </View>


            <View style={footer}>
                {nextDays?.map(day => {
                    const {month: nextMonth, numberDay: nextNumberDay} = getDateTime(new Date(day.dt * 1000));
                    return (
                        <View key={day.dt} style={item}>
                            <Text style={text}>{nextNumberDay}/{nextMonth}</Text>
                            <View style={iconBlock}>
                                <Image source={{uri: `https://openweathermap.org/img/wn/${day.weather?.[0]?.icon}@2x.png`}} resizeMode={"contain"} style={{width: 60, height: 60}}/>
                                <Text style={text}>{day?.weather?.[0].main}</Text>
                            </View>
                            <Text style={text}>
                                {parseInt(day.temp.max)}&#8451;/{parseInt(day.temp.min)}&#8451;
                            </Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
};

export default Home;