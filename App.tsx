import React, {useCallback, useEffect, useState} from "react";
import Header from "./components/Header/Header";
import {RefreshControl, ScrollView, View} from 'react-native';
import TimeTableService from "./api/TimeTableService";
import {getMonday} from "./helpers/getMonday";
import {getDay} from "./helpers/getDay";
import styles from "./assets/styles";
import {reFormatData} from "./helpers/reFormatData";
import {TimeTable} from "./models/TimeTable";
import List from "./components/List/List";

const App = () => {
    const [activeDay, setActiveDay] = useState<string>(getDay());
    const [timeTable, setTimeTable] = useState<TimeTable[]>([])
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const fetchTimeTable = async (date: string) => {
        setIsLoading(true);
        const response = await TimeTableService.fetchTimeTable(getMonday(date));
        if (response.data) {
            setTimeTable(reFormatData(date, response.data));
        }
        setIsLoading(false)
    }

    useEffect(() => {
        fetchTimeTable(activeDay)
    }, [])

    const onRefresh = async () => {
        setRefreshing(true)
        fetchTimeTable(activeDay)
        setRefreshing(false);
    };


    const handleSetActiveDay = useCallback((day: string) => {
        return () => {
            setActiveDay(day)
        }
    }, [])


    const handleSetActiveDayByCalendar = useCallback(async (day: string) => {
        setActiveDay(day);
        fetchTimeTable(day);
    }, [])

    return (
        <View style={styles.appContainer}>
            <Header
                handleSetActiveDayByCalendar={handleSetActiveDayByCalendar}
                handleSetActiveDay={handleSetActiveDay}
                activeDay={activeDay}
            />
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>
                {/*<Lessons timeTable={timeTable} activeDay={activeDay} isLoading={isLoading}/>*/}
                <List timeTable={timeTable} activeDay={activeDay} setActiveDay={(day) => setActiveDay(day)}
                      isLoading={isLoading}/>
            </ScrollView>
        </View>
    );
}


export default App
