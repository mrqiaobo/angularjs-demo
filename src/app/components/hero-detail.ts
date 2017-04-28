import { Component, Input } from '@angular/core';
import { Hero } from '../hero';

@Component({
    selector: 'hero-details',
    templateUrl: './../template/heroDetailTemplate.html',
})

export class HeroDetailComponent {
   @Input() hero: Hero;
}