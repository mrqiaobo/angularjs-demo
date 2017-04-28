import { Component } from '@angular/core';
import { Hero } from './hero'; 
@Component({
  selector: 'my-app',
  templateUrl: './template/mainTemplate.html',
  styleUrls: ['./style/style.css'],
  // templateUrl: './template/editHeroTemplate.html',
})
export class AppComponent  { 
  title = 'Tour of Heroes';
  heroes = HEROES;
  selectedHero: Hero;
  myHero = this.heroes[0];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

const HEROES: Hero[] = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
  ];
