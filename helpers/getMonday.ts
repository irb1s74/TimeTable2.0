export function getMonday(date: string): string {
    const monday = new Date(date);
    monday.setDate(monday.getDate() - monday.getDay() + 1);
    return `${monday.getFullYear()}-${String(monday.getMonth() + 1).padStart(2, '0')}-${String(monday.getDate()).padStart(2, '0')}`
}
