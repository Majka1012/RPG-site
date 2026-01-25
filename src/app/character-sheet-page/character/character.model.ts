export interface Character {
  name: string;
  playerId: string;
  job: string;
  age: number;
  stats: { statName: string; value: number }[];
}
