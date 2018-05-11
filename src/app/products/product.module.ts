import { NgModule } from '@angular/core';

import { ProductListComponent } from './product-list.component';
import { ProductDetailComponent } from './product-detail.component';
import { ProductEditComponent } from './product-edit.component';

import { ProductFilterPipe } from './product-filter.pipe';
import { ProductService } from './product.service';

import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ProductResolver } from './product-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: 'products',
        children: [{
          path: '',
          component: ProductListComponent
        },
        {
          path: ':id',
          component: ProductDetailComponent,
          resolve: { product: ProductResolver }
        },
        {
          path: ':id/edit',
          component: ProductEditComponent,
          resolve: { product: ProductResolver }
        }]
      },

    ])
  ],
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProductFilterPipe
  ],
  providers: [
    ProductService,
    ProductResolver
  ]
})
export class ProductModule { }
