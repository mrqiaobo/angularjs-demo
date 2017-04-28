import { Component, OnInit } from '@angular/core';

import { Hero } from '../model/hero';
import { HeroService } from '../services/hero.service';

@Component({
    selector: 'my-dashboard',
    // template: `<h3>My Dashboard</h3>`,
    providers: [HeroService],
    styleUrls: ['./../style/dashboard.component.css'],
    templateUrl: '/app/template/dashboard.template.html'
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];
    
    ngOnInit(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    constructor( private heroService: HeroService) {}
}
