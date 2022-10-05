import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { UncommonComponent } from './pages/uncommon/uncommon.component';
import { BasicComponent } from './pages/basic/basic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MayusPipe } from './pipes/mayus.pipe';



@NgModule({
  declarations: [
    NumbersComponent,
    UncommonComponent,
    BasicComponent,

    MayusPipe
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    UncommonComponent,
    BasicComponent,

  ]
})
export class SalesModule { }
