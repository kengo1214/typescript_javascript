export {};

//abstract = 抽象
//抽象メソッドは必ずオーバーライド(継承)しなければならない（規則）

abstract class Animal {
  abstract cry(): string;
}

class Lion extends Animal {
  cry() {
    return "nora";
  }
}

class Tiger extends Animal {
  cry() {
    return "grrrr";
  }
}
