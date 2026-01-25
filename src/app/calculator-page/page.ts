import { Component } from '@angular/core';
import { Entity } from './entity/entity';
import { AddEnemy } from './add-enemy/add-enemy';
import { AddPlayer } from './add-player/add-player';
import { EntitesType } from './entity/entity.model';

@Component({
  selector: 'app-page2',
  imports: [Entity, AddEnemy, AddPlayer],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class CalcPageComponent {
  showAddEnemy = false;
  showAddPLayer = false;

  Entities?: EntitesType[];

  addPlayer() {
    this.showAddPLayer = true;
  }
  addEntity() {
    this.showAddEnemy = true;
  }
  cancelCreation() {
    this.showAddEnemy = false;
    this.showAddPLayer = false;
  }
  renderEntities() {
    this.Entities = this.Entities?.sort((a, b) => {
      return b.Dex - a.Dex;
    });
  }

  newEntity(enti: EntitesType) {
    if (!this.Entities) {
      this.Entities = [];
    }
    let unique = true;
    for (const entity of this.Entities) {
      if (
        entity.Name === enti.Name &&
        enti.entityType === 'player' &&
        entity.entityType === 'player'
      ) {
        unique = false;
      }
    }
    if (unique) {
      this.Entities.push(enti);
      this.renderEntities();
      this.cancelCreation();
    } else {
      alert('This character is already selceted');
    }
  }
  deleteEntity() {}
}
