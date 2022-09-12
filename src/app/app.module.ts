import { NgModule, /*LOCALE_ID*/ } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app-router.module';


import { AppComponent } from './app.component';
import { SalesModule } from './sales/sales.module';
import { SharedModule } from './shared/shared.module';

//cambiar el local de la app

import  localEs  from "@angular/common/locales/es";
import { registerLocaleData } from '@angular/common';

registerLocaleData( localEs );


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    SalesModule,
    AppRouterModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
