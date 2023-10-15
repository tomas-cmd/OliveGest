import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  @Input() sideNavStatus: boolean = false;

  list = [
    {
    number: '1',
    name: 'Início',
    icon: 'fa-solid fa-house',
    routerLink: '/Home'
  },
  {
    number: '2',
    name: 'Estatísticas',
    icon: 'fa-solid fa-chart-line',
    routerLink: '/Home'
  },
  {
    number: '2',
    name: 'Clientes',
    icon: 'fa-solid fa-person',
    routerLink: '/Clients'
  },
  {
    number: '3',
    name: 'Funcionários',
    icon: 'fa-sharp fa-solid fa-user',
    routerLink: '/Employes'
  },
  {
    number: '4',
    name: 'Encomendas',
    icon: 'fa-solid fa-cart-shopping',
    routerLink: '/Home'
  },
  {
    number: '5',
    name: 'Produtos',
    icon: 'fa-sharp fa-solid fa-bottle-droplet',
    routerLink: '/Home'
  },
  {
    number: '6',
    name: 'Registo de Entradas',
    icon: 'fa-sharp fa-regular fa-ticket',
    routerLink: '/Tickets'
  },
  {
    number: '7',
    name: 'Guias Internas',
    icon: 'fa-sharp fa-regular fa-folder',
    routerLink: '/Guias'
  },
];

constructor(){}
  ngOnInit(): void {}
  }
