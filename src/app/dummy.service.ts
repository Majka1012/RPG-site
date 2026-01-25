import { DUMMY_USERS } from './dummy-users';
import { DUMMY_CHARACTERS } from './dummy-characters';
import { Character } from './character-sheet-page/character/character.model';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DummyService {
  DummyCharacters: Character[] = DUMMY_CHARACTERS;
  constructor() {
    // this.DummyUsers = DUMMY_USERS;
    const characters = localStorage.getItem('characters');
    if (characters) {
      this.DummyCharacters = JSON.parse(characters);
    }
  }
  private saveCharacter() {
    localStorage.setItem('characters', JSON.stringify(this.DummyCharacters));
  }

  getUserById(id: string) {
    return DUMMY_USERS.find((user) => user.id === id);
  }
  getUserByName(name: string) {
    return DUMMY_USERS.find((user) => user.name === name);
  }

  getCharacter(name: string): Character | undefined {
    return this.DummyCharacters.find((char) => char.name === name);
  }
  getCharactersByPlayer(id: string): Character[] | undefined {
    return this.DummyCharacters.filter((char) => char.playerId === id);
  }

  addCharacter(character: Character) {
    if (!this.DummyCharacters.find((char) => char.name === character.name)) {
      this.DummyCharacters.push(character);
    } else {
      alert('Character with this name already exist!');
    }
    this.saveCharacter();
  }
  deleteCharacter(name: string) {
    const indx = this.DummyCharacters.findIndex((char) => char.name === name);
    if (indx >= 0) {
      this.DummyCharacters.splice(indx, 1);
      // console.log('DELETE 4 ' + name);
      console.log(this.DummyCharacters);
    }
    this.saveCharacter();
  }
}
