import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

//Configuración de idiomas
import localeEsEs from '@angular/common/locales/es-419'
import localeFrCA from '@angular/common/locales/fr-CA'
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEsEs)
registerLocaleData(localeFrCA)

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ButtonModule,
    SharedModule
  ],
  providers: [
    //Para definir un lenguaje por defecto para el pipe
    {provide: LOCALE_ID, useValue: 'es-419'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
