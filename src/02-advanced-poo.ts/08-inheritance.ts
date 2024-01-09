//@ts-check

export class Animal{
  constructor(public name: string) {

  }
  move() {
    console.log("I'm moving");
  }
  greeting() {
    return `Hello, I'm ${this.name}`;
  }
}
const pug = new Animal('Bruce');

pug.move();

let message = pug.greeting();
console.log(message);

export class Dog extends Animal{
  //Para que el constructor de la clase padre se ejecute
  //debemos llamar a super() y pasarle los argumentos
  //que recibe el constructor de la clase padre
  
  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log('Woof!');
    }
  }
}

let nina = new Dog('Nina', 'Haziel');
console.log(nina.greeting());
nina.woof(4);
console.log(nina.owner);