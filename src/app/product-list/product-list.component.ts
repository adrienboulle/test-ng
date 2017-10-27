import { Component } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  constructor(public itemsService: ItemsService) {}
}
