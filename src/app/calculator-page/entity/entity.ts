import { Component, Input } from '@angular/core';
import { DummyService } from '../../dummy.service';
import { EntityModel } from './entity.model';

@Component({
  selector: 'app-entity',
  imports: [],
  templateUrl: './entity.html',
  styleUrl: './entity.css',
})
export class Entity {
  @Input({ required: true }) entity!: EntityModel & { entityType: string };
}
