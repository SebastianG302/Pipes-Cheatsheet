import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { BasicComponent } from './pages/basic/basic.component';
import { SortComponent } from './pages/sort/sort.component';



@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    BasicComponent,
    SortComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumbersComponent,
    UncommonComponent,
    BasicComponent,
    SortComponent
  ]
})
export class SalesModule { }
