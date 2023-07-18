import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  exports: [MenubarModule, ButtonModule, FieldsetModule, PanelModule, CardModule],

})
export class PrimeNgModule { }
