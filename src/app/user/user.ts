import { Component, Input, computed, Output, EventEmitter } from '@angular/core';
import { User } from './user.model';
@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class UserComponent {
  imgPath = computed(() => 'assets/users/' + this.user.avatar);

  @Output() selectUser = new EventEmitter<string>();
  @Input({ required: true }) selected!: boolean;
  @Input({ required: true }) user!: User;

  onClick() {
    this.selectUser.emit(this.user.id);
  }
}
