import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  mostre= [
{nome: " Il Surrealismo di Salvador Dalí: Un Viaggio nell'Inconscio",immagine:'',artista:'Salvador Dalí', descrizione:"Esplora il mondo onirico e surreale di Salvador Dalí attraverso le sue opere iconiche, tra cui 'The Persistence of Memory', che sfidano la percezione e invitano gli spettatori a esplorare l'inconscio umano.", date:' 1 gennaio 2024 - 31 dicembre 2024'},
{nome: "",immagine:'',artista:'', descrizione:"", date:''},
{nome: "",immagine:'',artista:'', descrizione:"", date:''},
{nome: "",immagine:'',artista:'', descrizione:"", date:''},
{nome: "",immagine:'',artista:'', descrizione:"", date:''},
{nome: "",immagine:'',artista:'', descrizione:"", date:''},
{nome: "",immagine:'',artista:'', descrizione:"", date:''},

  ]

  constructor() { }
}
