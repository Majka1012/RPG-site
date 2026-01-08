import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_CHARACTERS } from '../dummy-characters';

import { Character } from './character.model';
import { Sheet } from './sheet/sheet';
import { AddCharacter } from './add-character/add-character';
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

  addBtnClick() {}
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
}
