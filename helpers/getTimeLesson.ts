export const getTimeLesson = (index: number) => {
    switch (index) {
        case 1:
            return '8:30-10:05';
        case 2:
            return '10:25-12:00';
        case 3:
            return '12:20-14:10';
        case 4:
            return '14:15-15:50';
        case 5:
            return '16:10-17:55';
        case 6:
            return '18:00-19:35';
        default:
            return ""
    }
};
