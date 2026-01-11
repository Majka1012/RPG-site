import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_CHARACTERS } from '../dummy-characters';

import { Character } from './character.model';
import { Sheet } from './sheet/sheet';
import { AddCharacter } from './new-character/new-character';
@Component({
  selector: 'app-character',
  imports: [Sheet, AddCharacter],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class CharacterComponent {
  // @Input() Name!: string;
  playerName!: string;
  character?: Character;

  showAddCharacter = false;

  addBtnClick() {
    this.showAddCharacter = true;
    // console.log(this._name);
  }
  onCharacterCreated(character: Character) {
    this.showAddCharacter = false;
    this.character = character;
    this.playerName = character.player;
  }
  // character = DUMMY_CHARACTERS.find((user) => user.name === this.Name);
  @Input()
  set Name(value: string) {
    if (!value) {
      this.character = undefined;
      return;
    }
    const found = DUMMY_CHARACTERS.find((user) => user.name === value);
    if (found) {
      this.character = found;
      this.playerName = this.character.player;
    } else {
      this.character = undefined;
    }
  }

  @Output() deleteChar = new EventEmitter<string>();
  onDelete(name: string) {
    this.character = undefined;
    this.deleteChar.emit(name);
  }

  cancelCreation() {
    this.showAddCharacter = false;
  }
}
