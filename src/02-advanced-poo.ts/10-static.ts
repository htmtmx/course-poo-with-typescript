//@ts-check

// Los valores estáticos son valores que no cambian
// a lo largo de la vida de la aplicación
// Por ejemplo, el valor de PI

// console.log(Math.PI);
// console.log(Math.max(1, 5, 6, 7, 872, 3, 32, 6, 433));

export class MyMath{
  static readonly PI = 3.14;
  static max(...numbers: number[]) {
    return numbers.reduce((max, item)=> max >= item ? max: item, 0);
  }
}

const numbers = [3,23,3,3,3,23,3,23,3,23,322];
console.log(MyMath.PI);
console.log(MyMath.max(2,34,6,76,4,3));
console.log(MyMath.max(...numbers));

// ... spread operator (operador de propagación)
// nos permite pasar un array como si fueran argumentos
// de una función