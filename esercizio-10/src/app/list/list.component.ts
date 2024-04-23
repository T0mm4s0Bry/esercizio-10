import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServizioService } from '../servizio.service';


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListComponent,CommonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  

    constructor(public provaService: ServizioService){}

    mostre(id:any){
      window.location.href= '/Mostra/' + id
    }
}
