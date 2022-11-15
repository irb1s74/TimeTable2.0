import React, {FC, memo} from 'react';
import {
    View,
    Text, ScrollViewComponent, ScrollView, SafeAreaView,
} from 'react-native';
import styles from ".//LessonCardStyles";
import {getTimeLesson} from "../../helpers/getTimeLesson";
import {Lesson} from "../../models/Lesson";

interface LessonCardProps {
    lesson: Lesson[]
}

const Card: FC<LessonCardProps> = memo(({lesson}) => {

    return (
            <View style={styles.lessons}>
                {
                    lesson && lesson.map((lesson, index) => (
                        <>
                            <Text style={styles.time} key={index}>
                                {getTimeLesson(lesson.num)}
                            </Text>
                            <View style={styles.lesson}>
                                <View style={styles.lesson_header}>
                                    <Text style={styles.index}>
                                        {lesson.num}.
                                    </Text>
                                    <Text style={styles.subgroup}>
                                        {lesson.subgroup !== 0 && `подгруппа: ${lesson.subgroup} `}
                                    </Text>
                                </View>
                                <Text style={styles.subject_name}>
                                    {lesson?.subject_name}
                                </Text>
                                <View style={styles.lesson_footer}>
                                    <Text style={styles.surname}>
                                        {lesson?.teacher_surname && lesson.teacher_surname + " "}
                                        {lesson.teacher_name && lesson.teacher_name.replace(/ /g, '').split('')[0] + "."}
                                        {lesson.teacher_secondname && lesson.teacher_secondname.replace(/ /g, '').split('')[0] + "."}
                                    </Text>
                                    <Text style={styles.room_name}>
                                        {lesson?.room_name && `${lesson.room_name} `}
                                    </Text>
                                </View>
                            </View>
                        </>
                    ))
                }
            </View>
    );
});

export default Card;

