export {};

//別名表記にしている
type Mojiretu = string;

const foostring: string = "Hello";
const fooMojiretu: Mojiretu = "Hello";

//example1を作成
const example1 = {
  name: "Kengo",
  age: 22,
};

//typeを作成
type Profile = {
  name: string;
  age: number;
};

//上記で作成したtypeを使うと楽
const example2: Profile = {
  name: "Kengo",
  age: 22,
};

//typeofで「〜のタイプで指定する」ことが可能。
//example1に変化があっても追従して変化してくれるから便利
type Profile2 = typeof example1;
