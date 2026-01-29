import { Component } from '@angular/core';
import { Entity } from './entity/entity';
import { AddEnemy } from './add-enemy/add-enemy';
import { AddPlayer } from './add-player/add-player';
import { EntitesType } from './entity/entity.model';
import { ChoseList } from './chose-list/chose-list';

@Component({
  selector: 'app-page2',
  imports: [Entity, AddEnemy, AddPlayer, ChoseList],
  templateUrl: './page.html',
  styleUrl: './page.css',
})
export class CalcPageComponent {
  showAddEnemy = false;
  showAddPLayer = false;
  showEntitieList = false;

  Entities: EntitesType[] = [];
  listIndex = 0;
  listOfEntities: { entities: EntitesType[]; id: string }[] = [];

  hasGun(gun: { id: string; value: boolean }) {
    if (gun.value === true && this.Entities) {
      this.Entities.find((ent) => ent.id === gun.id)!.Dex += 50;
    } else if (this.Entities) {
      this.Entities.find((ent) => ent.id === gun.id)!.Dex -= 50;
    }
    this.renderEntities();
  }

  addPlayer() {
    this.showAddPLayer = true;
  }
  addEntity() {
    this.showAddEnemy = true;
  }
  cancel() {
    this.showAddEnemy = false;
    this.showAddPLayer = false;
    this.showEntitieList = false;
  }
  renderEntities() {
    this.Entities = this.Entities?.sort((a, b) => {
      return b.Dex - a.Dex;
    });
  }
  deleteEntity(id: string) {
    if (this.Entities) {
      this.Entities = this.Entities.filter((enti) => enti.id !== id);
    }
  }
  newEntity(enti: EntitesType) {
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
      this.cancel();
    } else {
      alert('This character is already selceted');
    }
  }
  clearEntities() {
    this.Entities = [];
    this.renderEntities();
  }
  saveEntieties() {
    if (this.Entities.length > 0) {
      this.listOfEntities[this.listIndex] = {
        entities: this.Entities.map((e) => ({ ...e })), //This is needed because it makes a stupid copy
        id: crypto.randomUUID(),
      };
      // console.log(this.listOfEntities);
      alert('Saved!');
      this.listIndex++;
    }
  }
  chooseFromList() {
    this.showEntitieList = true;
  }
  savingChosenList(id: string) {
    this.Entities = this.listOfEntities.find((i) => i.id === id)!.entities;
  }
  clearingList() {
    this.listOfEntities = [];
    this.listIndex = 0;
    this.cancel();
  }
}
