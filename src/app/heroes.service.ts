import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './hero-mock';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private messageService: MessageService) { }

  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.addMessage('Heroes Service: Fetched Heroes');
    return heroes;
  }

  getHeroesById(id : number): Observable<Hero> {
    const hero = HEROES.find((heroesId) => id === heroesId.id)!;
    this.messageService.addMessage(`HeroService: fetched hero id=${id}`);
    // console.log(hero, "this is the object from service calss");
     return of(hero);
  }

}
