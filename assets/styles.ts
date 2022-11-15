import {Dimensions, StyleSheet} from "react-native";

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        width,
        height,
        backgroundColor: 'rgb(15, 15, 20)',
        color: '#FFF',
    },
    container: {
        flex: 1,
    },
    paragraph: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'left',
        color: '#FFF',
    },
    header: {
        paddingTop: 50,
        paddingBottom: 15,
        width,
        flexDirection: 'column',
        alignItems: "center"
    },
    headerInfo: {
        width: width - 15,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center"
    },
    ////
    daysWrapper: {
        width: width - 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 4,
    },
    day: {
        padding: 5,
        borderRadius: 5,
        width: 40,
        textAlign: 'center',
        color: '#FFF',
    },
    ////
    ////
    switchWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    switch: {
        width: width - 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderStyle: 'solid',
        borderColor: 'rgb(201, 201, 201)',
        borderWidth: 2,
        borderRadius: 8,
        padding: 4,
    },
    section: {
        padding: 5,
        borderRadius: 5,
        width: 40,
    },
    section_active: {
        width: 40,
        padding: 5,
        borderRadius: 5,
        backgroundColor: '#FFF',
    },
    section_text_active: {
        fontSize: 22,
        color: 'rgb(15, 15, 20)',
        fontWeight: '700',
        textAlign: 'center',
    },
    section_text: {
        fontSize: 22,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center',
    },
    ////
    viewContainer: {
        backgroundColor: 'rgb(15, 15, 20)',
        alignItems: 'center',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    emptyTimeTable: {
        color: '#FFF',
        marginTop: 10,
        fontWeight: 'bold',
    }
});

export default styles;
