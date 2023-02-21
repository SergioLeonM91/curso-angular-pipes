import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  nameLower: string = 'Sergio';
  nameUpper: string = 'SERGIO';
  nameFull: string = 'sergio enrique';

  date: Date = new Date();
}
