import { Component, Input, input, computed, output, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  imgPath = computed(() => 'assets/users/' + this.user.avatar);

  @Output() selectUser = new EventEmitter<string>();
  @Input({ required: true }) user!: {
    id: string;
    name: string;
    character: string;
    avatar: string;
  };

  onClick() {
    this.selectUser.emit(this.user.id);
  }
}
