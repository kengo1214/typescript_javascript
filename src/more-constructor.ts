export {};

class Person {
  constructor(public name: string, protected age: number) {}
}

const me = new Person("健悟", 22);
console.log(me);
