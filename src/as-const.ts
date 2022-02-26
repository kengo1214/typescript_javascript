export {};

// 変数の場合

let name = "kengo";

name = "Kobayashi";

//as constで制限をかけているため、変数(nickname) の書き換えはできない
// 唯一できるとしたらしたら”Kobayashi”のみ（設定することなんて無いけど）
// letだけど実質const 扱いという話

let nickname = "Kobayashi" as const;
nickname = "Kobayashi";

// オブジェクトの場合

let profile = {
  name: "Kengo",
  height: 178,
} as const;

// profile.name = "Kobaken";
// profile.height = 180;
