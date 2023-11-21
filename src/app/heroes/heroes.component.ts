import { Component, Input, OnInit } from '@angular/core';
import { HEROES } from '../hero-mock';
import { Hero } from '../hero';

import { HeroesService } from '../heroes.service';
import { MessageService } from '../message.service';




@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements  OnInit{

  selectedHero?: Hero;
  heroe: Hero[] = [];
 
  @Input() hero = HEROES;
  constructor (private  heroeService : HeroesService, private messageService: MessageService) {}
  

   heroes : string = "Gift";

  //  onSelect(obj: Hero) : void{
  //    this.selectedHero = obj;
  //    this.messageService.addMessage(`HeroesComponent: Selected hero id=${obj.id}`);
  //  }

   ngOnInit(): void {
    this.getHeroes();
  }
  //  getHeroes(): void {
  //   this.heroe = this.heroeService.getHeroes();
  // }
  getHeroes(): void {
    this.heroeService.getHeroes()
        .subscribe(heroes => this.heroe = heroes);// subscribing the array we get from hero  making it available to the current components
  }

   
}
