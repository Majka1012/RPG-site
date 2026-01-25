import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DummyService } from '../../dummy.service';
import { EntitesType } from '../entity/entity.model';
// type EntiteType = EntityModel & { entityType: string };

@Component({
  selector: 'app-add-player',
  imports: [],
  templateUrl: './add-player.html',
  styleUrl: './add-player.css',
})
export class AddPlayer {
  name = '';
  dex = 0;
  player = '';
  hp = 0;
  entity!: EntitesType;
  char: any;
  characters!: any[];

  constructor(private dummyService: DummyService) {
    this.characters = this.dummyService.DummyCharacters;
  }

  @Output() add = new EventEmitter<EntitesType>();
  addPlayer(selectedName: string) {
    this.name = selectedName;
    this.char = this.dummyService.getCharacter(this.name);
    this.dex = this.char?.stats.find((stat: any) => stat.statName === 'dex')?.value;
    this.player = this.dummyService.getUserById(this.char.playerId)!.name;
    this.hp = this.char?.stats.find((stat: any) => stat.statName === 'con')?.value;
    this.entity = {
      id: this.name + crypto.randomUUID(),
      Name: this.name,
      Dex: this.dex,
      HP: this.hp,
      Player: this.player,
      entityType: 'player',
    };
    this.add.emit(this.entity);
  }

  @Output() cancel = new EventEmitter<void>();

  cancelCreation() {
    this.cancel.emit();
  }
}
