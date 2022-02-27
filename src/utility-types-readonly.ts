export {};

type Profile = {
  name: string;
  age: number;
};

const me: Profile = {
  name: "Kengo",
  age: 22,
};

me.age++;

console.log(me);

type PersonalDataType = Readonly<Profile>;

const friend: PersonalDataType = {
  name: "Daichi",
  age: 23,
};

// friend.age++

