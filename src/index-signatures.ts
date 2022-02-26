export {};

let profile: { name?: string } = {};

//index signature
// {[index: typeForeIndex]:typeForValue}

profile.name = "kengo";
// profile.age = 22;

//===============================

interface Profile {
  name: string;
  underTwenty: boolean;
  [index: string]: string | number | boolean;
}

let profile2: Profile = { name: "Kengo", underTwenty: false };

profile2.name = "Kengo";
profile2.age = 22;
profile2.nationality = "Japan";
