import { Component, Input } from '@angular/core';
import { DUMMY_CHARACTERS } from '../dummy-characters';

import { Character } from './character.model';
import { Sheet } from './sheet/sheet';
@Component({
  selector: 'app-character',
  imports: [Sheet],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class CharacterComponent {
  // @Input() Name!: string;
  _name!: string;
  character!: Character;

  // character = DUMMY_CHARACTERS.find((user) => user.name === this.Name);
  @Input()
  set Name(value: string) {
    this._name = value;
    this.character = DUMMY_CHARACTERS.find((user) => user.name === this._name)!;
  }
}
