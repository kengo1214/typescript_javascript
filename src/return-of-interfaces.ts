export {};

class Mahotsukai {}

class Souryo {}

class Taro extends Mahotsukai {}

//=========interfaceを2つ準備===================

interface Kenja {
  ionazun(): void;
}

interface Senshi {
  kougeki(): void;
}

//======implementsの説明==============

//implements = 実装
//implementsの場合だと複数のinterfaceを扱える
//「interfaceによる多重継承」という
class Jiro implements Kenja, Senshi {
  ionazun(): void {
    console.log("ionazun");
  }
  kougeki(): void {
    console.log("kougeki");
  }
}

const jiro = new Jiro();
jiro.ionazun();
jiro.kougeki();
