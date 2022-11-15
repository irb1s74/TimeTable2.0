import {Lesson} from "../models/Lesson";
import {TimeTable} from "../models/TimeTable";

export function reFormatData(activeDay: string, lessons: Lesson[]): TimeTable[] {
    let current = new Date(activeDay);
    current.setDate(current.getDate() - current.getDay() + 1);
    const TimeTable: TimeTable[] = new Array(6).fill({}).map(() => {
        const date = new Date(current);
        current.setDate(current.getDate() + 1);
        return {
            date: `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`,
            lessons: []
        }
    })
    TimeTable.forEach((day, index) => {
        TimeTable[index].lessons = lessons.filter((lesson) => day.date === lesson.date)
    })
    return TimeTable;
}
