export {};

//互換性が有る場合

let fooCompatible: any;
let barCompatible: string = "TypeScript";

//結果はundefined
console.log(typeof fooCompatible);

fooCompatible = barCompatible;

//string型のデータを代入した為、結果はstringに遷移
console.log(typeof fooCompatible);

//互換性が無い場合

let fooIncompatible: string;
let barIncompatible: number = 1;

//互換性が無い。stringにnumberを設定しようとしているから
// fooIncompatible = barIncompatible;

// 同じ型同士なら互換性はあるのでOK
let fooString: string;
let barString: string = "string";

fooString = barString;

//別件

interface Animal {
  age: number;
  name: string;
}

class Person {
  constructor(public age: number, public name: string) {}
}

let me: Animal;
me = new Person(22, "Kengo");
