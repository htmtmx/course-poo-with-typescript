//@ts-check
const date = new Date();
date.getHours();

const date2 = new Date(1993, 1, 12);

console.log(date);
console.log(date2);

class MyDate {
  year: number;
  month: number;
  day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  getYear() {
    return this.year;
  }
}

const myDate = new MyDate(1996, 1, 13);
console.log(myDate);
console.log(myDate.getYear());