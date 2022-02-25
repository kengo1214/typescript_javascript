export {};

//namespaceを設定すれば無限にクラス設計ができる

//名前空間
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

//名前空間
namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const meTokyo = new Japanese.Tokyo.Person("KOBAYASHI");
console.log(meTokyo.name);

const meOsaka = new Japanese.Tokyo.Person("TAKOYAKI");
console.log(meOsaka.name);

const Justin = new English.Person(" Justin", "Drew", "Bieber");
console.log(Justin);
