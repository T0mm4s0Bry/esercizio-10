import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServizioService } from '../servizio.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostre',
  standalone: true,
  imports: [MostreComponent,CommonModule],
  templateUrl: './mostre.component.html',
  styleUrl: './mostre.component.css'
})
export class MostreComponent {
  title = 'esercizio-10';

  identificatore: any;

  constructor(private provaService: ServizioService, private route: ActivatedRoute){
 
  }
  ngOnInit(){

    this.identificatore = this.route.snapshot.paramMap.get('id');
 
  }
 
}
