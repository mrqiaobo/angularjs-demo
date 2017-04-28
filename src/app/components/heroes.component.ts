import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../model/hero'; 
import { HeroService} from '../services/hero.service';

@Component({
  selector: 'my-heroes',
  templateUrl: '/app/template/heroes.template.html',
  styleUrls: ['./../style/heroes.component.css'],
  providers: [HeroService],
})
export class HeroesComponent  {
  
  heroes: Hero[];
  selectedHero: Hero;
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  getHeroes() {
    // this.heroes = this.heroService.getHeroes();
    this.heroService.getHeroes().then(heroes => this.heroes = heroes );
    // this.heroService.getHeroSlowly().then(heroes => this.heroes = heroes);
    
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;

    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero=null;
      })
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h!== hero)
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }

  constructor(private heroService: HeroService, private router: Router ) {}
}
