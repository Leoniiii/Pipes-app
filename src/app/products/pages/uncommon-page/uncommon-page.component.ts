import { Component } from '@angular/core';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //I18N Select
  name = 'Fernando'
  gender: 'male' | 'female' = 'male'
  invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }


  changeClient(): void {
    this.name = 'Melisa'
    this.gender = 'female'
  }

  //I18Plural
  public clients = ['Maria', 'Pedro', 'Fernando', 'Eduardo', "Melisa"]
  clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'

  }

  deleteClient(): void {
    this.clients.shift()
  }

  //KeyValuePipe
  public person = {
    name: 'Angel', 
    age: 30,
    country: 'Vanada'
  }
}
