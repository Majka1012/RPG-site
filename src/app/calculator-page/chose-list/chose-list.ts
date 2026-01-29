import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EntitesType } from '../entity/entity.model';

@Component({
  selector: 'app-chose-list',
  imports: [],
  templateUrl: './chose-list.html',
  styleUrl: './chose-list.css',
})
export class ChoseList {
  @Input({ required: true }) list!: { entities: EntitesType[]; id: string }[];
  @Output() chosen = new EventEmitter<string>();
  pickedEntities(id: string) {
    console.log(id);
    console.log(this.list.find((temp) => temp.id === id));
    this.chosen.emit(id);
  }
  @Output() canceling = new EventEmitter<void>();
  cancel() {
    this.canceling.emit();
  }
  @Output() clearing = new EventEmitter<void>();
  clear() {
    this.clearing.emit();
  }
}
