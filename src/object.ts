export {};

let profile1: object = { name: "Kengo" };
profile1 = { birthYear: 1999 };

let profile2: {
  name: string;
} = { name: "Kengo" };
profile2 = { name: "Kobayashi" };