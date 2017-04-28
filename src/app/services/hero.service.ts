import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from '../model/hero';


@Injectable()
export class HeroService { 
    private herosUrl = 'api/heroes';
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }
    // getHeroes(): Hero[] {
    //     return HEROES;
    // }
    
    getHeroes(): Promise<Hero[]> {
        // return Promise.resolve(HEROES);
        return this.http.get(this.herosUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        return Promise.reject(error.message || error );
    }

    // getHero(id: number): Promise<Hero> {
    //     return this.getHeroes()
    //         .then(heroes => heroes.find(hero => hero.id === id));
    // }
    getHero(id: number): Promise<Hero> {
        const url = `${this.herosUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }

    getHeroSlowly(): Promise<Hero[]> {
        return new Promise( resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    update(hero: Hero): Promise<Hero> {
        const url = `${this.herosUrl}/${hero.id}`;
        return this.http.put(url, JSON.stringify(hero), { headers: this.headers})
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }

    create(name: string): Promise<Hero> {
        return this.http.post(this.herosUrl, JSON.stringify({name: name}), {headers: this.headers})
            .toPromise()
            .then(response => response.json().data as Hero )
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.herosUrl}/${id}`;
        return this.http.post(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}