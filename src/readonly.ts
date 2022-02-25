export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard("健悟");
console.log(myVisaCard.owner);
// myVisaCard.owner = "kengo";
