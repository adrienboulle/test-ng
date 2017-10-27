import { Component } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent {
  public tags: string[] = [];

  constructor(public itemsService: ItemsService) {
    for (const tag in itemsService.filters.tags) {
      if (itemsService.filters.tags.hasOwnProperty(tag)) {
        this.tags.push(tag);
      }
    }
  }
}
