import { Component } from '@angular/core';
import { SuperHero } from '../models/superhero';
import { SuperHeroService } from '../services/super-hero.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  heroes: SuperHero[] = [];



  constructor(private superHeroService: SuperHeroService){

  }

  ngOnInit(): void{

    this.superHeroService
    .getSuperHeros()
    .subscribe((result: SuperHero[]) => (this.heroes = result));
     
    console.log(this.heroes);

  }

  addHero(): void{

   /* this.heroes.lastDelivery = new Date(1999,5,5);
    const newHero: SuperHero = {name: 'Novo Cliente', contact:'', place: '', date};

    this.heroes.push(newHero);*/
  }

  showDetails(selectedHero: SuperHero):void{

  }

  deleteHero(selectedHero: SuperHero):void{

  }

}
