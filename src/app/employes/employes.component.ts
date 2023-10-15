import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
//import { Employee } from '../models/employee';
import { EmployeeService } from '../services/employee.service';


interface Employee {
  id: number;
  nome: string;
}

interface Month {
  name: string,
  code: number
}

/*interface DayInput {
  [key: string]: number;
}

interface EmployeeInput {
  [key: string]: DayInput;
}*/


@Component({
  selector: 'app-employes',
  templateUrl: './employes.component.html',
  styleUrls: ['./employes.component.css']
})
export class EmployesComponent implements OnInit{

  months: Month[];
  selectedMonth: Month;
  //daysInMonth: number[] = [];
  days: Date[] = [];
  employees = [  { id: 0 , name: 'Jorge Lopes' },  { id: 1, name: 'Tânia' },  {id:2, name: 'Plástico' }];
  val:number;
  employeeHours: number[][]=[];
  
  currentDate = new Date();
  // Get the number of days in the current month
  daysInMonthh = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate();
  
  // Create an array of day numbers from 1 to the number of days in the current month
  daysInMonthArray = Array.from({ length: this.daysInMonthh }, (_, i) => i + 1);
  

  inputValuess: number[] = [];
  inputValues: number[][] = [];

  daysInMonth = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

  constructor(private employeeService: EmployeeService){

    this.months = [
      {name:'Janeiro',code:1},
      {name:'Fevereiro',code:2},
      {name:'Março',code:3},
      {name:'Abril',code:4},
      {name:'Maio',code:5},
      {name:'Junho',code:6},
      {name:'Julho',code:7}
    ];

    //this.daysInMonth = this.daysInMonthArray.slice(0,15);
    

  }

  // Define the current date
  ngOnInit(){
    //this.initializeEmployeeHours();

  }



  initializeEmployeeHours() {
    this.employeeHours = [];
    this.inputValuess = [];
    const numDays = 15; //martelado

    console.log("initialize", this.employees.length)
    for (let i = 0; i < this.employees.length; i++) {
      this.inputValues[i] = [];
      for (let j = 0; j < numDays; j++) {
        this.inputValues[i][j] = 0;
        //console.log(this.inputValues[i][j])
      }
    }


    console.log('employees:', this.employees);
    console.log('daysInMonth:', this.daysInMonth);
    console.log('inputValues:', this.inputValues);
  }




  onMonthChange() {
    /*this.daysInMonth = [];
    const year = new Date().getFullYear();
    const month = this.selectedMonth.code - 1;
    const numDays = 15; //martelado
    for (let i = 1; i <= numDays; i++) {
      this.daysInMonth.push(i);
    }
    console.log("on month change", this.daysInMonth)*/
  }

  showMore() {
    const currentLength = this.daysInMonth.length;
    const remainingLength = currentLength - 15;
    this.daysInMonth = this.daysInMonth.slice(0, currentLength).concat(this.daysInMonth.slice(currentLength, currentLength + 15));
  }

  validateHours(employee :Employee){}



}
