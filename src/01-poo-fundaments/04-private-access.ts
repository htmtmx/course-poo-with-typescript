//@ts-check

// Para poder definir atributos y métodos privados, debemos usar la palabra reservada 'private'
export class MyDate {
  year: number;
  month: number;
  private day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    const day = this.addPadding(this.day);
    const month = this.addPadding(this.month);
    return `${day}/${month}/${this.year}`
  }

  public getYear() {
    return this.year;
  }

  private addPadding(value: number) {
    if (value < 10) {
      return `0${value}`
    }
    return `${value}`
  }

  public add(amount: number, type: 'days' | 'months' | 'years') {
    if (type === 'days') {
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

const myDate = new MyDate(1990, 1, 10);
console.log(myDate.printFormat());