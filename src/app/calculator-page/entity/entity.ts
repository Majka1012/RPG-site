import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntitesType } from './entity.model';

@Component({
  selector: 'app-entity',
  imports: [],
  templateUrl: './entity.html',
  styleUrl: './entity.css',
})
export class Entity {
  @Input({ required: true }) entity!: EntitesType;

  @Output() hasGun = new EventEmitter<{ id: string; value: boolean }>();

  hasGUN(check: boolean) {
    this.hasGun.emit({ id: this.entity.id, value: check });
  }

  @Output() delete = new EventEmitter<string>();

  deleteEntity() {
    this.delete.emit(this.entity.id);
  }
}
