import { Component, computed, Input } from '@angular/core';
import { DUMMY_CHARACTERS } from '../dummy-characters';

import { User } from '../user/user';
@Component({
  selector: 'app-character',
  imports: [],
  templateUrl: './character.html',
  styleUrl: './character.css',
})
export class Character {
  // @Input() Name!: string;
  _name!: string;
  character?: any;
  // character = DUMMY_CHARACTERS.find((user) => user.name === this.Name);
  @Input()
  set Name(value: string) {
    this._name = value;
    this.character = DUMMY_CHARACTERS.find((user) => user.name === this._name);
  }
}
