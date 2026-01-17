import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../character.model';
import { DummyService } from '../../dummy.service';

@Component({
  selector: 'app-sheet',
  imports: [],
  templateUrl: './sheet.html',
  styleUrl: './sheet.css',
})
export class Sheet {
  private _character!: Character;
  constructor(private dummyService: DummyService) {}

  playerName?: string;

  @Input({ required: true })
  set character(char: Character) {
    this._character = char;
    this.playerName = this.dummyService.getUserById(char.playerId)?.name;
  }

  get character(): Character {
    return this._character;
  }

  @Output() deleteSheet = new EventEmitter<string>();
  deleteCharacter() {
    if (!this.character) return;
    this.deleteSheet.emit(this.character.name);
    // console.log('DELETE ' + this.character.name);
  }
}
