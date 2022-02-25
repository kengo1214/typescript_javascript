export {};

//＊owner
//  ＊所有者
//  ＊初期化時に設定できる
//  ＊途中変更出来ない
//  ＊参照できる

//＊secretNumber
//  ＊個人番号
//  ＊初期化時に設定できる
//  ＊途中変更できる
//  ＊参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }

  //参照するためのメソッド。getterと呼ぶ
  get owner() {
    return this._owner;
  }

  //値を設定する時のみ実行されるメソッド。setterと呼ぶ
  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard("ケンゴ", 19991214);
console.log(card.debugPrint());
card.secretNumber = 123456789;
console.log(card.debugPrint());

// card.owner = "Kengo";
console.log(card.owner);
// card.secretNumber;
// card._secretNumber
console.log(card.secretNumber);
