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
  _name!: string;
  character!: Character;

  showAddCharacter = false;

  addBtnClick() {
    this.showAddCharacter = true;
  }
  onCharacterCreated(character: Character) {
    this.showAddCharacter = false;
  }
  // character = DUMMY_CHARACTERS.find((user) => user.name === this.Name);
  @Input()
  set Name(value: string) {
    this._name = value;
    this.character = DUMMY_CHARACTERS.find((user) => user.name === this._name)!;
  }

  @Output() deleteChar = new EventEmitter<string>();
  onDelete(name: string) {
    this.deleteChar.emit(name);
  }

  cancelCreation() {
    this.showAddCharacter = false;
  }
}
