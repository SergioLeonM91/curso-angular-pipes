import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AppRouterModule } from './app-router.module';
import { SharedModule } from './shared/shared.module';
import { SalesModule } from './sales/sales.module';

import localeES from "@angular/common/locales/es-BR";
import localeDE from "@angular/common/locales/de";
import { registerLocaleData } from "@angular/common";
registerLocaleData(localeES);
registerLocaleData(localeDE);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    SharedModule,
    SalesModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'es-BR'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
