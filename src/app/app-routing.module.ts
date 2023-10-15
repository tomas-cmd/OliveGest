import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './clients/clients.component';
import { EmployesComponent } from './employes/employes.component';
import { GuiasComponent } from './guias/guias.component';
import { HomeComponent } from './home/home.component';
import { TicketsComponent } from './tickets/tickets.component';

const routes: Routes = [
  {path:'Employes', component: EmployesComponent},
  {path:'Clients', component: ClientsComponent},
  {path:'Home', component: HomeComponent},
  {path:'Tickets', component: TicketsComponent},
  {path:'Guias', component: GuiasComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
