export {};

//=== Exclude「除外する」===

// 何も指定していない関数のみの型
type DebugType = () => {};

// 3通りの型を指定している
type SomeTypes = string | number | DebugType;

// あるタイプだけを除外したいときに「exclude」
//書き方： Exclude<全体の型、除外したい型>
type FunctionType = Exclude<SomeTypes, string | number>;

// 関数なしバージョンで指定してみると以下
type NonFunctionType = Exclude<SomeTypes, DebugType>;
// これでも内容は同じ(Functionは総称のため可能)
type TheExcludingFunction = Exclude<SomeTypes, Function>;

// ===Exract「抽出する」===
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>;
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number>;
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>;

//NunNullable
// nullやundefinedを排除してくれる型
type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>;
