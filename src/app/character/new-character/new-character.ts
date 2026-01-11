import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../character.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-character',
  imports: [FormsModule],
  templateUrl: './new-character.html',
  styleUrl: './new-character.css',
})
export class AddCharacter {
  checkStat(input: HTMLInputElement): boolean {
    if (!input.value || Number(input.value) < 0 || Number(input.value) > 100) {
      return true;
    } else {
      return false;
    }
  }
  @Input({ required: true }) player!: string;
  @Output() createdCharacter = new EventEmitter<Character>();
  createCharacter(
    nameInput: HTMLInputElement,
    jobInput: HTMLInputElement,
    ageInput: HTMLInputElement,
    strInput: HTMLInputElement,
    conInput: HTMLInputElement,
    sizInput: HTMLInputElement,
    dexInput: HTMLInputElement,
    appInput: HTMLInputElement,
    intInput: HTMLInputElement,
    powInput: HTMLInputElement,
    eduInput: HTMLInputElement,
    speedInput: HTMLInputElement
  ) {
    if (
      !nameInput.value ||
      !this.player ||
      !jobInput.value ||
      this.checkStat(ageInput) ||
      this.checkStat(strInput) ||
      this.checkStat(conInput) ||
      this.checkStat(sizInput) ||
      this.checkStat(dexInput) ||
      this.checkStat(appInput) ||
      this.checkStat(intInput) ||
      this.checkStat(powInput) ||
      this.checkStat(eduInput) ||
      this.checkStat(speedInput)
    ) {
      alert('Error! Please check if your data is correct!');
    } else {
      const newCharacter: Character = {
        name: nameInput.value,
        player: this.player,
        job: jobInput.value,
        age: Number(ageInput.value),
        stats: [
          { statName: 'str', value: Number(strInput.value) },
          { statName: 'con', value: Number(conInput.value) },
          { statName: 'siz', value: Number(sizInput.value) },
          { statName: 'dex', value: Number(dexInput.value) },
          { statName: 'app', value: Number(appInput.value) },
          { statName: 'int', value: Number(intInput.value) },
          { statName: 'pow', value: Number(powInput.value) },
          { statName: 'edu', value: Number(eduInput.value) },
          { statName: 'speed', value: Number(speedInput.value) },
        ],
      };
      this.createdCharacter.emit(newCharacter);
    }
  }
  @Output() cancel = new EventEmitter<void>();

  cancelCreation() {
    this.cancel.emit();
  }
}
