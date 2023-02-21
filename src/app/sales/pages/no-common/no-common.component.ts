import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-common',
  templateUrl: './no-common.component.html',
  styles: [
  ]
})
export class NoCommonComponent {
  
  // i18nSelect
  name: string = 'Sergio';
  genre: string = 'masculino';
  invitationMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla',
  }

  //i18nPlural
  clients: string[] = ['Maria','Pedro','Juan','Bartolo','Hector'];
  clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando',
  }

  changeClient() {
    this.name = 'Sonia';
    this.genre = 'femenino';
  }

  deleteClient() {
    this.clients.pop();
  }

  // KeyValue Pipe
  person = {
    name: 'Sergio',
    age: 31,
    address: 'Av Vista Poniente'
  }

  // Json Pipe
  heroes = [
    {
      name: 'Superman',
      fly: true
    },
    {
      name: 'Robin',
      fly: false
    },
    {
      name: 'Acuaman',
      fly: false
    }
  ]

  // Async pipe
  myObservable = interval(1000);

  valuePromise = new Promise( (resolve, reject) => {

    setTimeout( () => {
      resolve('Promise end');
    }, 3500);
  });

}
