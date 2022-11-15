import React, {memo} from 'react';
import Card from "../Card/Card";
import {TimeTable} from "../../models/TimeTable";
import {ActivityIndicator, Dimensions, View} from 'react-native';
import styles from '../../assets/styles';

interface LessonsProps {
    timeTable: TimeTable[];
    activeDay: string;
    isLoading: boolean;
}


const Lessons = ({timeTable, activeDay, isLoading}: LessonsProps) => {

    if (isLoading) {
        return (
            <View style={styles.horizontal}>
                <ActivityIndicator size="large" color="#FFF"/>
            </View>
        )
    }

    const {width} = Dimensions.get('window');
    return (
        <View style={{width, display: "flex", alignItems: "center"}}>
            <Card
                lesson={timeTable.find(timeTable => timeTable.date === activeDay)?.lessons ?? []}
            />
        </View>

    )
};

export default Lessons;
