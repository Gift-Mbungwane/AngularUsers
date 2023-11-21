import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../heroes.service';
import {HEROES} from '../hero-mock';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent {

  @Input() hero?: Hero;
   heroe: Hero | undefined;


  constructor(
    private route: ActivatedRoute,
  private heroeService: HeroesService,
  private location: Location
  ) {}

  ngOnInit (): void {
    this.getHero();
    console.log(this.hero, "make sure this is not undefined");
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroeService.getHeroesById(id).subscribe((details: Hero) => this.heroe = details);
    console.log(id, "this is the id we requesting with");
  }

  goBack() {
    this.location.back();
  }

}
