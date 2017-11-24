import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';


@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: []
})
export class HeroesComponent implements OnInit {
  title = 'Tour of Heroes';
  selectedHero : Hero;
  heroes : Hero[];

  constructor(private HeroService : HeroService) {}

  getHeroes() : void {
    this.HeroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  onSelect(hero : Hero): void {
    this.selectedHero = hero;
  }

  ngOnInit() : void {
    this.getHeroes();
  }
}