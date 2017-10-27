import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductDescComponent } from './product-desc/product-desc.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PricePipePipe } from './price-pipe.pipe';
import { WeightPipePipe } from './weight-pipe.pipe';
import { HeaderComponent } from './header/header.component';
import { CanactivateDetailGuard } from './canactivate-detail.guard';
import { ItemsService } from './items.service';
import { FiltersComponent } from './filters/filters.component';

const appRoutes: Routes = [
  {
    path: 'products',
    children: [
      {
        path: '',
        component: ProductListComponent,
      },
      {
        path: 'details/:id',
        component: ProductDescComponent,
        canActivate: [
          CanactivateDetailGuard,
        ],
      },
    ],
  },
  { path: '**',
    redirectTo: '/products',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductItemComponent,
    ProductDescComponent,
    ProductListComponent,
    PricePipePipe,
    WeightPipePipe,
    HeaderComponent,
    FiltersComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [
    ItemsService,
    CanactivateDetailGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
