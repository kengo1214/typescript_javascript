export {};

const debugProfile = (name: string, age: number) => {
  console.log({ name, age });
};

debugProfile("Kengo", 22);

//============================================

type Profile = Parameters<typeof debugProfile>;

const profile: Profile = ["Daichi", 22];

debugProfile(...profile);

// 用意に変更出来ないような型から、引数の方を取り出したい時に「Parameter」