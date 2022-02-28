export {};

//実際に使うのがname,weigthだけだった場合
// 使いたいものだけ取り出し新たに型定義したい
type DetailedPlofile = {
  name: string;
  number: number;
  weight: number;
};

// Pickで取り出す
type SimplePlofile = Pick<DetailedPlofile, "name" | "weight">;

// omit = 除外する
// 不要なものを選択して除外する。そして新規の型作成
type SmallPlofile = Omit<DetailedPlofile, "height">;
