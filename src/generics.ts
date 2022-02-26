export {};

// 型は異なるが実行内容は同じものを共通化したい
// それを解決するのが「generics = ジェネリクス」

// const echo = (arg: number): number => {
//   return arg;
// };

// const echo = (arg: string): string => {
//   return arg;
// };

// 上記2つのecho関数の機能を持つジェネリクス関数を作成中
// <T>に注目。ジェネリクスの宣言である。抽象的な型を意味している
//  number型にもなるし、string型にもなる
// 引数に対してと、戻り値に対しても<T>が作用している
const echo = <T>(arg: T): T => {
  return arg;
};

console.log(echo<number>(100));
console.log(echo<string>("Hello"));
console.log(echo<boolean>(true));

//===classとGenericsの組み合わせ===

//一般的なclassの場合

class Mirror {
  constructor(public value: number) {}

  echo(): number {
    return this.value;
  }
}

console.log(new Mirror(123).echo());

//そんな方でも初期化した時のvalueが
// echoメソッドで返ってくるよう、ジェネリクスを使用する

class Mirror2<T> {
  constructor(public value: T) {}

  echo(): T {
    return this.value;
  }
}

console.log(new Mirror2<number>(123).echo());
console.log(new Mirror2<string>("こんにちは").echo());
console.log(new Mirror2<boolean>(true).echo());
