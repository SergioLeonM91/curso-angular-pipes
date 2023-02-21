import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicsComponent } from './sales/pages/basics/basics.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { NoCommonComponent } from './sales/pages/no-common/no-common.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: BasicsComponent,
    pathMatch: 'full'
  },
  {
    path: 'no-commons',
    component: NoCommonComponent
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
