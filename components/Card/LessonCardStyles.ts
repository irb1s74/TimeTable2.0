import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgb(15, 15, 20)',
    },
    lessonsWrapper: {
        width,
        alignItems: 'center',
    },
    lessons: {
        width: width - 20,
        justifyContent: 'flex-start'
    },
    lesson: {
        color: '#FFF',
        marginBottom: 20,
        width: '100%',
        borderStyle: 'solid',
        borderColor: 'rgb(201, 201, 201)',
        borderWidth: 2,
        borderRadius: 8,
        padding: 8,
    },
    index: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#FFF',
    },
    lesson_header: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
    },
    subgroup: {
        fontSize: 12,
        color: '#FFF',
    },
    lesson_footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    time: {
        color: '#FFF',
        fontSize: 13,
        marginBottom: 5,
    },
    surname: {
        color: '#FFF',
        fontSize: 13,
    },
    subject_name: {
        fontSize: 17,
        color: '#FFF',
        flex: 1,
        marginBottom: 8,
    },
    room_name: {
        fontSize: 14,
        color: '#FFF',
    },
    today: {
        color: '#FFF',
        marginTop: 10,
        fontWeight: 'bold',
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10,
    },
    viewContainer: {
        backgroundColor: 'rgb(15, 15, 20)',
        alignItems: 'center',
    },

    emptyTimeTable: {
        color: '#FFF',
        marginTop: 10,
        fontWeight: 'bold',
    }
});
export default styles;
