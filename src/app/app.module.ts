import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TableModule} from 'primeng/table';
import {FormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ImageModule} from 'primeng/image';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployesComponent } from './employes/employes.component';
import { ClientsComponent } from './clients/clients.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { GuiasComponent } from './guias/guias.component';
import { TicketsComponent } from './tickets/tickets.component';
import { ButtonModule } from 'primeng/button';
import { FileUploadModule } from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {ToastModule} from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import {DialogModule} from 'primeng/dialog';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { TicketService } from './services/ticket.service';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EmployesComponent,
    ClientsComponent,
    HeaderComponent,
    HomeComponent,
    GuiasComponent,
    TicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    FormsModule,
    InputTextModule,
    ImageModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    LayoutModule,
    MatSidenavModule,
    MatListModule,
    FontAwesomeModule,
    HttpClientModule,
    ButtonModule,
    FileUploadModule,
    ToolbarModule,
    ToastModule,
    ConfirmDialogModule,
    DialogModule,
    RadioButtonModule,
    InputNumberModule,
    DropdownModule
  ],
  providers: [TicketService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
