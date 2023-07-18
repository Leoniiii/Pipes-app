import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de angular',
        icon: 'pi pi-desktop',
        
        items: [
          { label: 'Textos y fechas', icon: 'pi pi-align-left', routerLink: '/', },
          { label: 'Números', icon: 'pi pi-dollar', routerLink: '/numbers-page' },
          { label: 'No comunes', icon: 'pi pi-globe', routerLink: '/uncommon-page' }
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Otro elemento',
            icon: 'pi pi-cog',
            items: [
              {label: 'Otro hijo', icon: 'pi pi-cog'}
            ]
          }
        ]
      }
    ];
    this.activeItem = this.items[0]
  }
}
