import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { CharacterComponent } from './character/character';
import { Helper } from './helper';
import { Character } from './character/character.model';
// import { DUMMY_CHARACTERS } from './dummy-characters';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, CharacterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  DUMMY_USERS = DUMMY_USERS;
  selectedUserId?: string;
  get selectedUser() {
    return Helper.getUserById(this.selectedUserId!);
  }
  showCharacter(id: string) {
    this.selectedUserId = id;
  }
  deleteCharacter(name: string) {
    Helper.deleteCharacter(name);
    this.selectedUserId = this.selectedUserId;

    this.selectedUser;
  }
  addCharacter(character: Character) {
    Helper.addCharacter(character);
    this.selectedUserId = character.playerId;
    this.selectedUser;
  }
}
