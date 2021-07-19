export default class Timer {
    time: string;

    constructor (time: string) {
        this.time = time;
    }

    convertToMilitary () {
        let [hours, minutes, secondsWithModifier]: number[] | string[] = this.time.split(":");
        if(hours === "12") hours = "00";
        const modifier = secondsWithModifier.slice(2) === "PM" ? "PM" : "AM";
        if(modifier === "PM") hours = parseInt(hours, 10) + 12;
        const seconds = secondsWithModifier.slice(0, 2);
        return `${hours}:${minutes}:${seconds}`;;
    }
}