export {};


//as 〜パターン

let name: any = "Kengo";
let length = (name as string).length;

length = "foo";

//============================

//<>パターン

let name2: any = "Kengo";

let length = (<string>name).length;

length = "foo";
