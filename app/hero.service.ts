import { HEROES } from './mock-heroes';
import { Injectable } from '@angular/core';
import { Hero } from './hero';
@Injectable()

export class HeroService {
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    };

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(
            (resolve) => setTimeout(resolve, 2000))
            .then(() => this.getHeroes());
    };
}