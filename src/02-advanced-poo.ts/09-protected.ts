//@ts-check

export class Animal {
  constructor(protected name: string) {

  }
  move() {
    console.log("I'm moving");
  }
  greeting() {
    return `Hello, I'm ${this.name}`;
  }
  protected doSomething() {
    console.log('Dooooo');
  }
}
const pug = new Animal('Bruce');

pug.move();

let message = pug.greeting();
console.log(message);

export class Dog extends Animal {

  constructor(name: string, public owner: string) {
    super(name);
  }
  woof(times: number) {
    for (let i = 0; i < times; i++) {
      console.log(`${this.name} Woof!`);
    }
    this.doSomething();
  }
  move() {
    console.log('Moving like a dog');
    super.move();
  }
}

let nina = new Dog('Nina', 'Haziel');
console.log(nina.greeting());
nina.woof(1);
console.log(nina.owner);
nina.move();
// con protected podemos acceder a las propiedades
// desde la clase hija pero no desde fuera de la clase hija