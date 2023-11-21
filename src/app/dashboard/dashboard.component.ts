import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  heroe : Hero [] =[];

  constructor(private heroeService: HeroesService) {}

  ngOnInit (): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroeService.getHeroes().subscribe((heroes): {} => this.heroe = heroes.slice(1, 5));
  }

}
