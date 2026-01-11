import { Component } from '@angular/core';
import { HeaderComponent } from './header/header';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { CharacterComponent } from './character/character';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, UserComponent, CharacterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  users = DUMMY_USERS;
  selectedUserId?: string;
  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id === this.selectedUserId);
  }

  showCharacter(id: string) {
    this.selectedUserId = id;
  }
  deleteCharacter(name: string) {
    const user = this.users.find((u) => u.character === name);
    if (!user) return;

    user.character = '';
  }
}
