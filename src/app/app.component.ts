import { Component, Input,OnInit } from '@angular/core';
import { SuperHero } from './models/superhero';
import { SuperHeroService } from './services/super-hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SuperHero.UI';
  heroes: SuperHero[] = [];
  sideNavStatus: boolean = false;

  //@Input() id:number;
  constructor(private superHeroService: SuperHeroService){

  }

  ngOnInit(): void{

    this.superHeroService
    .getSuperHeros()
    .subscribe((result: SuperHero[]) => (this.heroes = result));
     
    console.log(this.heroes);

  }
}
