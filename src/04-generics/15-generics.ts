//@ts-check
import { Dog } from "../02-advanced-poo.ts/09-protected";
function getValue(value:number) {
  return value;
}

// console.log(getValue(5));

// We send de type like a parameter
function getValueGeneric<myType>(value: myType) {
  return value;
}



getValueGeneric<number>(5).toFixed(2);
getValueGeneric<string>("5").concat('$');
getValueGeneric<number[]>([5, 3, 2, 4, 5]).sort((a, b) => a - b);

const myDog = new Dog('bruce', 'haziel');
getValueGeneric<Dog>(myDog)