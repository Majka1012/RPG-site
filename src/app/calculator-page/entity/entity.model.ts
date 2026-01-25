export interface EntityModel {
  Name: string;
  Dex: number;
  HP: number;
  Player: string;
}
export interface EntitesType extends EntityModel {
  entityType: string;
}
