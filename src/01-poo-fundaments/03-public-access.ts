//@ts-check

// Typescript por defecto pone todos los atributos y métodos de una clase como publicos
// Si queremos que sea público, no es necesario especificarlo pero lo podemos hacer con la palabra reservada 'public'
export class MyDate {
  public year: number;
  public month: number;
  public day: number;

  constructor(year: number, month: number, day: number) {
    this.year = year;
    this.month = month;
    this.day = day;
  }

  public printFormat(): string {
    return `${this.day}/${this.month}/${this.year}`
  }

  public getYear() {
    return this.year;
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

const myDate = new MyDate(1990, 1, 11);
console.log(myDate.day);
myDate.day = 29;
console.log(myDate.day);