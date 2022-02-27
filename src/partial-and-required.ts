export {};

//強制
type Profile = {
  name: string;
  age?: number;
  zipCode: number;
};

// オプショナル（有っても無くても）
type Profile2 = {
  name?: string;
  age?: number;
};

// オプショナル形式にする
type PartialType = Partial<Profile>;

// 必須形式にする
type RequiredType = Required<Profile>;
