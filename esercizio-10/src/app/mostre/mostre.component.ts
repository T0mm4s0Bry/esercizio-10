import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServizioService } from '../servizio.service';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [MostreComponent,CommonModule],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {
  title = 'esercizio-10';


  constructor(private provaService: ServizioService){
 
 
  }
 
}
