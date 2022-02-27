export {};

// Record <K,T> は 2つの肩引数を受け取る型

type Prefectures = "Tokyo" | "Kanagawa" | "Nagano";

type Covid19InfectionInfo = {
  kanji_name: string;
  confirmed_cases: number;
};

// それぞれの都道府県が共通の型データを保持している
const covidJapan: Record<Prefectures, Covid19InfectionInfo> = {
  Tokyo: { kanji_name: "東京", confirmed_cases: 6000 },
  Kanagawa: { kanji_name: "神奈川", confirmed_cases: 4000 },
  Nagano: { kanji_name: " 長野", confirmed_cases: 2000 },
  Okinawa: { kanji_name: " 沖縄", confirmed_cases: 1000 },
};
