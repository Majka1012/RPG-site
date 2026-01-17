import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { DummyService } from '../dummy.service';
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
  // constructor(private dummyService: DummyService) {}
  private characterService = inject(DummyService);
  playerName!: string;
  characters?: Character[];
  showAddCharacter = false;

  loadCharacters() {
    this.characters = this.characterService.getCharactersByPlayer(this.PlayerId) ?? [];
  }

  addBtnClick() {
    this.showAddCharacter = true;
  }

  // @Output() addChar = new EventEmitter<Character>();
  onCharacterCreated(character: Character) {
    this.showAddCharacter = false;
    // this.addChar.emit(character);
    this.characterService.addCharacter(character);
    this.loadCharacters();
  }
  @Input({ required: true }) PlayerId!: string;
  @Input() set Name(value: string) {
    this.playerName = value;
    let charactersFound: Character[] | undefined;
    charactersFound = this.characterService.getCharactersByPlayer(value);
    if (charactersFound) {
      this.characters = charactersFound;
      console.log(this.characters);
    }
  }

  @Output() deleteChar = new EventEmitter<string>();
  onDelete(name: string) {
    if (this.characters) {
      this.characters.forEach((char, index) => {
        if (char.name === name) {
          // this.deleteChar.emit(name);
          this.characterService.deleteCharacter(char.name);
        }
      });
    }
    this.loadCharacters();
  }

  cancelCreation() {
    this.showAddCharacter = false;
  }
}
