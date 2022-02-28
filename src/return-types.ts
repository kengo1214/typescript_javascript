export {};

function add(a: number, b: number) {
  return a + b;
}

console.log(add(1, 2));

//戻り値の値を型として取得したい
//ReturnTypeを使う
type ReturnTypeFromAdd = ReturnType<typeof add>;
