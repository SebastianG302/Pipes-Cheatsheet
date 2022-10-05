import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicComponent } from './sales/pages/basic/basic.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';

import { UncommonComponent } from './sales/pages/uncommon/uncommon.component';


const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    pathMatch: 'full'
  },
  {
    path: 'numbers',
    component: NumbersComponent,
  },
  {
    path: 'uncommon',
    component: UncommonComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRouterModule { }
