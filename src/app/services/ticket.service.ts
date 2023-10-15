import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { SuperHero } from '../models/superhero';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  private url = "Ticket";

  constructor(private http: HttpClient) { }


  public createTicket(ticket : Ticket): Observable<Ticket[]>{

    return this.http.post<Ticket[]>(`${environment.apiUrl}/${this.url}`,ticket);
  }

  public getTickets(): Observable<Ticket[]>{

    return this.http.get<Ticket[]>(`${environment.apiUrl}/${this.url}`);
  }

  public updateTicket(ticket : Ticket): Observable<Ticket[]>{

    return this.http.put<Ticket[]>(`${environment.apiUrl}/${this.url}`,ticket);
  }

  public deleteTicket(ticket : Ticket): Observable<Ticket[]>{

    return this.http.delete<Ticket[]>(`${environment.apiUrl}/${this.url}/${ticket.id}`);
  }



}



