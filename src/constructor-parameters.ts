export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

let kengo = new Person("Kengo", 22);
console.log(kengo);

type PersonType = typeof Person;

//ConstructorParameters

type Profile = ConstructorParameters<PersonType>;

//仮にデータを作成してみる
const profile: Profile = ["Daichi", 22];

// インスタンスを作成してみる
const friend = new Person(...profile);
console.log(friend);
