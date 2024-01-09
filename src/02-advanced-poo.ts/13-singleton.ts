//@ts-check
export class MyService {
  static instance: MyService | null = null;
  private constructor(
    private name: string,
  ) {

    }
  getName() {
    return this.name;
  }
  static create(name: string) {
    if (MyService.instance === null) {
      console.log('entra solo 1 vez');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

// When the constructor is PRIVATE we can't create a new instance of the class
// const myService1 = new MyService('Service 1');
// console.log(myService1.getName());

// const myService2 = new MyService('Service 2');
// console.log(myService2.getName());

// console.log(myService1 === myService2);

// Singleton garantiza que solo exista una instancia de una clase
// en toda la aplicación

const myService1 = MyService.create('Service 1');
console.log(myService1.getName());
const myService2 = MyService.create('Service 2');
console.log(myService2.getName());
const myService3 = MyService.create('Service 3');
console.log(myService3.getName());

console.log(myService1 === myService2);