import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  playerName!: string;
  character?: Character[];

  showAddCharacter = false;
  private loadCharacters() {
    this.character = Helper.getCharactersByPlayer(this.PlayerId) ?? [];
  }

  addBtnClick() {
    this.showAddCharacter = true;
  }
  @Output() addChar = new EventEmitter<Character>();

  onCharacterCreated(character: Character) {
    this.showAddCharacter = false;
    this.addChar.emit(character);
    this.loadCharacters();
  }
  @Input({ required: true }) PlayerId!: string;
  @Input()
  set Name(value: string) {
    this.playerName = value;
    let charactersFound: Character[] | undefined;
    charactersFound = Helper.getCharactersByPlayer(value);

    if (charactersFound) {
      this.character = charactersFound;
      console.log(this.character);
    }
  }

  @Output() deleteChar = new EventEmitter<string>();
  onDelete(name: string) {
    if (this.character) {
      this.character.forEach((char, index) => {
        if (char.name === name) {
          this.deleteChar.emit(name);
        }
      });
    }
    this.loadCharacters();
  }
  cancelCreation() {
    this.showAddCharacter = false;
  }
}
