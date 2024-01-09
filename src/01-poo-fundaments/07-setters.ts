//@ts-check

export class MyDate {

  constructor(
    public year: number = 1993,
    private _month: number = 7,
    private _day: number = 9
  ) { }

  public printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}/${month}/${this.year}`
  }

  // Cuando definimos un getter siempre debe
  // retornar un valor

  get day() {
    return this._day;
  }
  get month() {
    return this._month;
  }
  // Cuando definimos un setter siempre debe
  // recibir un valor

  set month(newValue: number) {
    if (newValue >= 1 && newValue <= 12) {
      this._month = newValue;
    } else {
      throw new Error("Valor fuera de rango");

    }
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
      this._day += amount;
    }
    if (type === 'months') {
      this._month += amount;
    }
    if (type === 'years') {
      this.year += amount;
    }
  }

  get isLeapYear(): boolean {
    if (this.year % 400 === 0) {
      return true;
    }
    if (this.year % 100 === 0) {
      return false;
    }
    return this.year % 4 === 0;
  }

}

const myDate = new MyDate();
const myDate2 = new MyDate(2001);
const myDate3 = new MyDate(2000);
const myDate4 = new MyDate(2004);
console.log(myDate.printFormat());
console.log(myDate2.printFormat())

console.log(myDate.day);
// myDate.day = 10;
console.log('1993 => ', myDate.isLeapYear);
console.log('2001 => ', myDate2.isLeapYear);
console.log('2000 => ', myDate3.isLeapYear);
console.log('2004 => ', myDate4.isLeapYear);

myDate4.month = 2;
console.log(myDate4.printFormat());
myDate4.month = 20;
console.log(myDate4.printFormat());