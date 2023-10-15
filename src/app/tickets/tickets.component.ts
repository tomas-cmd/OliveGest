import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';


@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css'],

  providers: [MessageService, ConfirmationService]
})
export class TicketsComponent implements OnInit {

  @Input() tickett?: Ticket;
  @Output() ticketsUpdated = new EventEmitter<Ticket[]>();
  
  tickets: Ticket[] = [];

  ticketDialog: boolean;

  loading: boolean = false;

  ticket: Ticket;

  selectedTicket: Ticket;

  submitted: boolean;

  constructor(private TicketService: TicketService, private messageService: MessageService, 
    private confirmationService: ConfirmationService){
  }

  ngOnInit(){

    this.TicketService
    .getTickets()
    .subscribe(results => 
      {
        this.tickets = results
        this.loading = false
        console.log(this.tickets);
      });
  }

openNew() {
    this.ticket={};
    this.submitted = false;
    this.ticketDialog = true;
}

saveTicket() {
  this.submitted = true;

  
  this.ticket.data = new Date();
  this.tickets.push(this.ticket);
  this.messageService.add({severity:'success', summary: 'Successful', detail: 'Ticket Created', life: 3000});

  this.tickets = [...this.tickets];

  this.ticketDialog = false;
  this.ticket = {};
}

deleteTicket(ticket: Ticket){
  this.TicketService.deleteTicket(ticket)
  .subscribe(results => 
    {
      this.tickets = results
      this.loading = false
      console.log(this.tickets);
    });
    
  this.confirmationService.confirm({
    message: 'Are you sure you want to delete ' + ticket.id + '?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
        
        this.tickets = this.tickets.filter(val => val.id !== ticket.id);
        this.ticket = {};
        this.messageService.add({severity:'success', summary: 'Successful', detail: 'Ticket Deleted', life: 3000});
        
        
    }
});

}

editTicket(selectedTicket: Ticket):void{

}

  hideDialog() {
    this.ticketDialog = false;
    this.submitted = false;
  }







}
