import { Component, EventEmitter, Input, Output, signal } from '@angular/core';
import { Character } from '../character.model';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-new-character',
  imports: [FormsModule],
  templateUrl: './new-character.html',
  styleUrl: './new-character.css',
})
export class AddCharacter {
  checkStat(input: any): boolean {
    if (!input || Number(input) < 0 || Number(input) > 100) {
      return true;
    } else {
      return false;
    }
  }
  @Input({ required: true }) player!: string;
  @Output() createdCharacter = new EventEmitter<Character>();
  nameInput = 'Johnny';
  jobInput = 'Detective';
  ageInput = 32;
  strInput = 50;
  conInput = 50;
  sizInput = 50;
  dexInput = 50;
  appInput = 50;
  intInput = 50;
  powInput = 50;
  eduInput = 50;
  speedInput = 50;
  createCharacter() {
    // console.log(Helper.getUserByName(this.player)!.id);
    // console.log(this.nameInput, this.player);

    if (
      !this.nameInput ||
      !this.player ||
      !this.jobInput ||
      this.checkStat(this.ageInput) ||
      this.checkStat(this.strInput) ||
      this.checkStat(this.conInput) ||
      this.checkStat(this.sizInput) ||
      this.checkStat(this.dexInput) ||
      this.checkStat(this.appInput) ||
      this.checkStat(this.intInput) ||
      this.checkStat(this.powInput) ||
      this.checkStat(this.eduInput) ||
      this.checkStat(this.speedInput)
    ) {
      alert('Error! Please check if your data is correct!');
      // console.log(this.nameInput, this.player);
    } else {
      const newCharacter: Character = {
        name: this.nameInput,
        playerId: this.player,
        job: this.jobInput,
        age: this.ageInput,
        stats: [
          { statName: 'str', value: this.strInput },
          { statName: 'con', value: this.conInput },
          { statName: 'siz', value: this.sizInput },
          { statName: 'dex', value: this.dexInput },
          { statName: 'app', value: this.appInput },
          { statName: 'int', value: this.intInput },
          { statName: 'pow', value: this.powInput },
          { statName: 'edu', value: this.eduInput },
          { statName: 'speed', value: this.speedInput },
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
