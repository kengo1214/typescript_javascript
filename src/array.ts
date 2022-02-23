export {};

//数値の配列
let numbers: number[] = [1, 2, 3];

// 以下2つは非推奨
let numbers2: Array<number> = [1, 2, 3];
let strings2: Array<string> = ["Tokyo", "Osaka", "Kyoto"];

//文字列の配列
let strings: string[] = ["Tokyo", "Osaka", "Kyoto"];

//二次元配列（配列の中に配列）
let nijigenHairetu: number[][] = [
  [50, 100],
  [100, 150],
];

//要素の方が混在しているもの
// 「|」 はorの意味
let hairetu: (number | boolean | string)[] = [1, false, "Tokyo"];
