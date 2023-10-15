import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/superhero';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  private url = "Client";

  constructor(private http: HttpClient) { }

  public getSuperHeros(): Observable<SuperHero[]>{


    return this.http.get<SuperHero[]>(`${environment.apiUrl}/${this.url}`);

  }


}



