export interface Character {
  name: string;
  player: string;
  job: string;
  age: number;
  stats: { statName: string; value: number }[];
}
