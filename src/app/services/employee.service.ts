import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee';
import { SuperHero } from '../models/superhero';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private url = "Employee";

  constructor(private http: HttpClient) { }

  /*public getEmployee(): Employee[]{

    let employee = new Employee();
      employee.id = 1;
      employee.nome = "Tania";
      employee.nif = 812342;
      employee.morada = "Travanca";

    return [employee];
    }*/
  }



