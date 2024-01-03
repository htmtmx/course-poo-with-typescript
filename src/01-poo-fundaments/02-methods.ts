export class MyDate {
  year: number;
  month: number;
  day: number;
  constructor(year:number, month:number, day:number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }
  printFormat(): string{
    return `${this.day}/${this.month}/${this.year}`
  }
  getYear() {
    return this.year;
  }
  add(amount: number, type: 'days'|'months'|'years') {
    if (type ==='days') {
      this.day += amount;
    }
    if (type === 'months') {
      this.month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }
}

const myDate = new MyDate(1990, 1, 11);
console.log(myDate.printFormat());

myDate.add(4, 'days');
console.log(myDate);
myDate.add(5, 'months');
console.log(myDate);
myDate.add(2, 'years');
console.log(myDate);