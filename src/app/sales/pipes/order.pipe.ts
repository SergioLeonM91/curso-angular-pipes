import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/sales.interface';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(heroes: Heroe[], orderBy: string = ''): Heroe[] {

    switch (orderBy) {
      case 'name':
        heroes = heroes.sort( (a,b) => (a.name > b.name) ? 1 : -1);
        break;

      case 'fly':
        heroes = heroes.sort( (a,b) => (a.fly > b.fly) ? -1 : 1);
        break;

      case 'color':
        heroes = heroes.sort( (a,b) => (a.color > b.color) ? 1 : -1);
        break;
    }

    return heroes;
  }

}
