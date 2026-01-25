import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EntitesType } from '../entity/entity.model';
@Component({
  selector: 'app-add-enemy',
  imports: [FormsModule],
  templateUrl: './add-enemy.html',
  styleUrl: './add-enemy.css',
})
export class AddEnemy {
  checkStat(input: any): boolean {
    if (!input || Number(input) < 0 || Number(input) > 100) {
      return true;
    } else {
      return false;
    }
  }
  @Output() createdCharacter = new EventEmitter<EntitesType>();
  nameEnemy = 'Zombie';
  dexInput = 60;
  newEnemy?: EntitesType;
  hpEnemy = 50;
  createEnemy() {
    if (!this.nameEnemy || this.checkStat(this.dexInput) || this.checkStat(this.hpEnemy)) {
      alert('Error! Please check if your data is correct!');
    } else {
      this.newEnemy = {
        id: crypto.randomUUID(),
        Name: this.nameEnemy,
        Dex: this.dexInput,
        HP: this.hpEnemy,
        Player: 'GM',
        entityType: 'enemy',
      };
    }
    this.createdCharacter.emit(this.newEnemy);
  }

  @Output() cancel = new EventEmitter<void>();

  cancelCreation() {
    this.cancel.emit();
  }
}
