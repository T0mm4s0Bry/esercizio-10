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
  nome:any;
  descrizione:any;
  descrizione2:any
  date:any;
  immagine1:any;
  immagine2:any;
  opera:any;
  descrizioneopera:any;
  opera2:any;
  descrizioneopera2:any;

  constructor(private provaService: ServizioService, private route: ActivatedRoute){
 
  }
  ngOnInit(){

    this.identificatore = this.route.snapshot.paramMap.get('id');
    this.nome = this.provaService.dati[this.identificatore].nome
    this.descrizione = this.provaService.dati[this.identificatore].descrizione
    this.descrizione2 = this.provaService.dati[this.identificatore].descrizione2
    this.date = this.provaService.dati[this.identificatore].date
    this.immagine1 = this.provaService.dati[this.identificatore].immagine1
    this.immagine2 = this.provaService.dati[this.identificatore].immagine2
    this.opera = this.provaService.dati[this.identificatore].opera
    this.descrizioneopera = this.provaService.dati[this.identificatore].descrizioneopera
    this.opera2 = this.provaService.dati[this.identificatore].opera2
    this.descrizioneopera2 = this.provaService.dati[this.identificatore].descrizioneopera2

  }
 
}
