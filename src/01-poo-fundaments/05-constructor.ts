//@ts-check

// La automatización de la creación de propiedades
// en el constructor se puede hacer de la siguiente
// manera:
// constructor(
//     public year: number = 1993,
//     public month: number = 7,
//     private day: number = 9
// ) {}
// Se deben especificar los modificadores de acceso
// en el constructor para que se creen las propiedades
// en la clase, de lo contrario solo se considera
// como un parámetro del constructor, una variable.
export class MyDate {

    constructor(
        public year: number = 1993,
        public month: number = 7,
        private day: number = 9
    ) {}

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

const myDate = new MyDate();
const myDate2 = new MyDate(2001);
console.log(myDate.printFormat());
console.log(myDate2.printFormat());

