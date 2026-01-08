import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../character.model';
@Component({
  selector: 'app-add-character',
  imports: [],
  templateUrl: './add-character.html',
  styleUrl: './add-character.css',
})
export class AddCharacter {
  @Output() newCharacterOut = new EventEmitter<Character>();
  @Input({ required: true }) player!: string;
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
      Number(ageInput.value) < 0 ||
      Number(ageInput.value) > 100 ||
      Number(strInput.value) < 0 ||
      Number(strInput.value) > 100 ||
      Number(conInput.value) < 0 ||
      Number(conInput.value) > 100 ||
      Number(sizInput.value) < 0 ||
      Number(sizInput.value) > 100 ||
      Number(dexInput.value) < 0 ||
      Number(dexInput.value) > 100 ||
      Number(appInput.value) < 0 ||
      Number(appInput.value) > 100 ||
      Number(intInput.value) < 0 ||
      Number(intInput.value) > 100 ||
      Number(powInput.value) < 0 ||
      Number(powInput.value) > 100 ||
      Number(eduInput.value) < 0 ||
      Number(eduInput.value) > 100 ||
      Number(speedInput.value) < 0 ||
      Number(speedInput.value) > 100
    ) {
      alert('BŁEDNE DANE!');
      console.log('błąd');
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
      console.log(newCharacter);
      this.newCharacterOut.emit(newCharacter);
    }
  }
}
