import { Component } from '@angular/core';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-product-desc',
  templateUrl: './product-desc.component.html',
  styleUrls: ['./product-desc.component.scss']
})
export class ProductDescComponent {
  constructor(public itemsService: ItemsService) {}
}
