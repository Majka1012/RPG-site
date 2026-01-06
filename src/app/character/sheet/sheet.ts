import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../character.model';
@Component({
  selector: 'app-sheet',
  imports: [],
  templateUrl: './sheet.html',
  styleUrl: './sheet.css',
})
export class Sheet {
  @Input({ required: true }) Name!: string;
  @Input({ required: true }) character!: Character;
  @Output() deleteSheet = new EventEmitter<number>();
  deleteCharacter() {
    this.deleteSheet.emit(this.character.id);
  }
}
