import React, {FC, useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Dimensions, View} from "react-native";
import SwiperFlatList from 'react-native-swiper-flatlist';
import {TimeTable} from "../../models/TimeTable";
import styles from "../Card/LessonCardStyles"
import Card from "../Card/Card";
import {SwiperFlatListRefProps} from 'react-native-swiper-flatlist/src/components/SwiperFlatList/SwiperFlatListProps';

const List: FC<{
    timeTable: TimeTable[],
    activeDay: string,
    setActiveDay: (day: string) => void,
    isLoading: boolean,
}> = (
    {
        timeTable,
        activeDay,
        isLoading,
        setActiveDay,
    }
) => {
    const scrollRef = useRef<SwiperFlatListRefProps>(null);

    if (isLoading) {
        return (
            <View style={styles.horizontal}>
                <ActivityIndicator size="large" color="#FFF"/>
            </View>
        )
    }

    useEffect(() => {
        scrollRef?.current?.scrollToIndex({index: timeTable.findIndex((item) => item.date === activeDay)})
    }, [])

    const handleChangeIndex = ({index}: { index: number }) => {
//        scrollRef.current?.scrollToIndex({index: index});
//        setActiveDay(timeTable[index].date);
    }

    const {width} = Dimensions.get('window');
    return (
        <SwiperFlatList
            ref={scrollRef}
            data={timeTable}
            renderItem={({item}) =>
                <View style={{width, display: 'flex', alignItems: "center"}}>
                    <Card lesson={item.lessons}/>
                </View>
            }
            onChangeIndex={handleChangeIndex}
        />
    );
};

export default List;
