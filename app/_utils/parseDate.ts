export default function parseDate(date: string) {
    var newDate = new Date(Date.parse(date));

    var day = newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
    var month = newDate.getMonth() < 10 ? "0" + newDate.getMonth() : newDate.getMonth();
    var year = newDate.getFullYear();

    var weekday = newDate.getDay();

    const weekdays = ["poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota", "niedziela"];

    return day + "." + month + "." + year + " (" + weekdays[weekday-1] + ")";
}