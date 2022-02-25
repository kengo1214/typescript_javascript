export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = "Kengo";
  static lastName: string = "Kobayashi";

  static work() {
    // return "Hey guys ! Are you interested in TypeScript?";
    return `Hey guys ! This is ${Me.firstName} Are you interested in TypeScript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());
