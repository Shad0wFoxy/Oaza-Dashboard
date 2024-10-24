export default function parseDate(date: string, dayName: boolean) {
    let newDate = new Date(Date.parse(date));

    let day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
    let month = newDate.getMonth() < 10 ? "0" + newDate.getMonth() : newDate.getMonth();
    let year = newDate.getFullYear();

    let weekday = newDate.getDay();

    const weekdays = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];

    let fullDate = day + "." + month + "." + year;

    dayName === true ? fullDate + " (" + weekdays[weekday-1] + ")" : "";

    return fullDate;
}