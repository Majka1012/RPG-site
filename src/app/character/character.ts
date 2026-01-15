import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { DUMMY_CHARACTERS } from '../dummy-characters';
import { Helper } from '../helper';
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
  }

  @Output() addChar = new EventEmitter<Character>();

  onCharacterCreated(character: Character) {
    // if (!this.playerName)throw(Error("WRONG"))
    this.showAddCharacter = false;
    this.addChar.emit(character);
    // console.log('EMITTED CHARACTER');
  }
  @Input({ required: true }) PlayerId!: string;
  @Input()
  set Name(value: string) {
    // console.log(Helper.getUser(this.PlayerId));
    if (this.PlayerId) {
      this.playerName = Helper.getUserById(this.PlayerId)!.name;
    } else throw Error('PLAYER ID IS MISSING OR WRONG');
    if (!value) {
      this.character = undefined;
      return;
    }
    // const found = DUMMY_CHARACTERS.find((user) => user.name === value);
    const found = Helper.getCharacter(value);
    // console.log(value);

    if (found) {
      this.character = found;
      // this.playerName = Helper.getUser(this.character.playerId)!.name;
      // console.log(this.playerName);
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
