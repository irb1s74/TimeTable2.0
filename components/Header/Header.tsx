import React, {FC, memo, useCallback, useState} from 'react';
import {Button, Text, View} from "react-native";
import styles from "../../assets/styles";
import InputDate from "../UI/Date";
import Switch from "./widget/Switch";
import Days from "./widget/Days"

interface HeaderProps {
    handleSetActiveDay: (day: string) => () => void
    handleSetActiveDayByCalendar: (day: string) => void;
    activeDay: string
}

const Header: FC<HeaderProps> = ({activeDay, handleSetActiveDay, handleSetActiveDayByCalendar}) => {
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false)
    const propsSetShowDataPicker = useCallback((payload: boolean) => setShowDatePicker(payload), [])
    const handleShowDatePicker = () => {
        setShowDatePicker(true)
    }
    return (
        <View style={styles.header}>
            <View style={styles.headerInfo}>
                <Text style={styles.paragraph}>19СПИ-2</Text>
                <Button title="📅" color='#FFF' onPress={handleShowDatePicker}/>
            </View>
            <InputDate
                date={activeDay}
                setDate={handleSetActiveDayByCalendar}
                show={showDatePicker}
                setShow={propsSetShowDataPicker}
            />
            <Days/>
            <Switch activeDay={activeDay} handleSetActiveDay={handleSetActiveDay}/>
        </View>
    );
};

export default memo(Header);
