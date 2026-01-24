import { Component, inject } from '@angular/core';
import { UserComponent } from './user/user';
import { DUMMY_USERS } from '../dummy-users';
import { CharacterComponent } from './character/character';
import { DummyService } from '../dummy.service';
// import { Character } from './character/character.model';
// import { DUMMY_CHARACTERS } from './dummy-characters';
// import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-page',
  imports: [UserComponent, CharacterComponent],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class PageComponent {
  // constructor(private dummyService: DummyService) {}
  private dummyService = inject(DummyService);

  DUMMY_USERS = DUMMY_USERS;
  selectedUserId?: string;
  get selectedUser() {
    return this.dummyService.getUserById(this.selectedUserId!);
  }
  showCharacter(id: string) {
    this.selectedUserId = id;
  }
  deleteCharacter(name: string) {
    this.dummyService.deleteCharacter(name);
    this.selectedUserId = this.selectedUserId;

    this.selectedUser;
  }
}
