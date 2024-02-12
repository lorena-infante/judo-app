export class Competition {
    constructor(name, date, place) {
        this.name = name;
        this.date = date;
        this.place = place;
    }

    getName() {
        return this.name;
    }
    getDate() {
        return this.date;
    }
    getPlace() {
        return this.place;
    }
}
