import React, {FC, memo, useMemo} from 'react';
import {Text, TouchableOpacity, View} from "react-native";
import styles from "../../../assets/styles";

interface HeaderSwitch {
    activeDay: string
    handleSetActiveDay: (day: string) => () => void
}

const HeaderSwitch: FC<HeaderSwitch> = ({activeDay, handleSetActiveDay}) => {
    const week = useMemo(() => {
        let current = new Date(activeDay);
        current.setDate(current.getDate() - current.getDay() + 1);
        return Array(6).fill(0).map(() => {
            const date = new Date(current);
            current.setDate(current.getDate() + 1);
            return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
        })
    }, [activeDay]);

    return (
        <View style={styles.switchWrapper}>
            <View style={styles.switch}>
                {week.map((day, index) => (
                    <TouchableOpacity
                        style={activeDay === day ? styles.section_active : styles.section}
                        key={index}
                        onPress={handleSetActiveDay(day)}
                    >
                        <Text style={activeDay === day ? styles.section_text_active : styles.section_text}>
                            {day.split('-')[2]}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
};

export default memo(HeaderSwitch);
