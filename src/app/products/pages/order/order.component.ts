import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public isUpperCase = false;
  public orderBy?: keyof Hero;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Superman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna verda',
      canFly: true,
      color: Color.green
    }
  ]

  toggleUpperCase() {
    this.isUpperCase = !this.isUpperCase
  }

  changeOrder(value: keyof Hero): void {
    this.orderBy = value
  }

}
