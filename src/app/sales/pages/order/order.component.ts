import { Component } from '@angular/core';
import { Heroe, Color } from '../../interfaces/sales.interface';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent {

  bMayus: boolean = false;
  orderBy: string = '';
  heroes: Heroe[] = [
    {
      name: 'Superman',
      fly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      fly: false,
      color: Color.black
    },
    {
      name: 'Robin',
      fly: false,
      color: Color.green
    },
    {
      name: 'Daredevil',
      fly: false,
      color: Color.red
    },
    {
      name: 'Green Lintern',
      fly: true,
      color: Color.green
    }
  ]

  toggleMayus() {
    this.bMayus = !this.bMayus;
  }

  changeOrder(value: string) {
    this.orderBy = value;
  }
}
