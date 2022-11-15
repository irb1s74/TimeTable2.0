import React from 'react';
import {Text, View} from "react-native";
import styles from "../../../assets/styles";


const Days = () => {
    const daysOfTheWeek = ['ПН', "ВТ", "СР", "ЧТ", "ПТ", "СБ"]

    return (
        <View style={styles.daysWrapper}>
            {daysOfTheWeek.map((day, index) => (
                <Text key={index} style={styles.day}>{day}</Text>
            ))}
        </View>
    );
};

export default Days;
