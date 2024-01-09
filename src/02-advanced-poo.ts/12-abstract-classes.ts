//@ts-check

import { Animal, Dog } from "./09-protected";

// Las classes abstractas no se pueden instanciar

// const animal = new Animal('rocky');
// animal.greeting();

const lola = new Dog('lola', 'Peter');
lola.greeting();
lola.woof(3);