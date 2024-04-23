import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioService {

  mostre= [
{nome: " Il Surrealismo di Salvador Dalí: Un Viaggio nell'Inconscio",immagine:'https://www.sistemacaseinfissi.com/wp-content/uploads/2023/07/el-salvador-dali-g8790553b5_1280-724x1024.jpg',artista:'Salvador Dalí', descrizione:"Esplora il mondo onirico e surreale di Salvador Dalí attraverso le sue opere iconiche, tra cui 'The Persistence of Memory', che sfidano la percezione e invitano gli spettatori a esplorare l'inconscio umano.", date:' 1 gennaio 2024 - 31 dicembre 2024'},
{nome: " Metafisica e Oltre: Il Mondo di Giorgio de Chirico",immagine:'https://www.pontiart.com/wp-content/uploads/2017/02/giorgio-de-chirico-pittore-vendita-opere-valutazioni-quadri-stima-valore-prezzi-quotazionia-acquisto-compro-295x300.png',artista:'Giorgio de Chirico', descrizione:"Immergiti nel mondo enigmatico della pittura metafisica di Giorgio de Chirico, esplorando le sue opere misteriose e suggestive che hanno influenzato il surrealismo e l'arte del XX secolo.", date:'15 febbraio 2024 - 15 luglio 2024'},
{nome: "Mondrian: Armonia Universale",immagine:'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Piet_Mondriaan.jpg/220px-Piet_Mondriaan.jpg',artista:'Piet Mondrian', descrizione:"Scopri l'arte astratta e l'armonia universale di Piet Mondrian attraverso le sue opere iconiche, che esplorano la combinazione di forme geometriche e colori primari per rappresentare l'essenza della realtà.", date:'10 aprile 2024 - 30 settembre 2024'},
{nome: "Fernand Léger: La Bellezza della Modernità",immagine:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4x6F1obacBbCGB-0teRx6tjS5-N4qm8gfjx7UM5sH8Pn-H8fUyOsb_sNavRmb9gylM0U&usqp=CAU',artista:'Fernand Léger', descrizione:"Esplora la bellezza della modernità attraverso gli occhi di Fernand Léger, che celebra la vita urbana e la tecnologia attraverso le sue opere dinamiche e geometriche.", date:'1 maggio 2024 - 31 ottobre 2024'},
{nome: "Picasso: Ritratti dell'Anima",immagine:'https://svetslik.si/wp-content/uploads/2021/09/Pablo-Picasso.jpg.webp',artista:'Pablo Picasso', descrizione:"Scopri l'intensità emotiva dei ritratti di Pablo Picasso, che esplorano la complessità dell'anima umana attraverso una combinazione unica di forme distorte e colori audaci.", date:'15 giugno 2024 - 15 novembre 2024'},
{nome: "Frida Kahlo: Passione e Sofferenza",immagine:'https://cdn.studenti.stbm.it/images/2020/12/01/frida-kahlo-orig.jpeg',artista:'Frida Kahlo', descrizione:"Scopri la passione e la sofferenza di Frida Kahlo attraverso i suoi potenti autoritratti, che esplorano la sua vita, le sue sfide e la sua identità messicana con una sincerità disarmante.", date:' 1 luglio 2024 - 31 dicembre 2024'},
{nome: "René Magritte: L'Arte del Mistero",immagine:'https://artlogic-res.cloudinary.com/w_1200,c_limit,f_auto,fl_lossy,q_auto/ws-gdm/usr/images/artists/group_images_override/items/07/077e87aafe604df68169b3b9d1567c52/ren-magritte.jpg',artista:'René Magritte', descrizione:"Esplora il mondo enigmatico e misterioso di René Magritte, che sfida la percezione e l'interpretazione attraverso le sue opere surreali e suggestive.", date:' 10 settembre 2024 - 28 febbraio 2025'},

  ]

  constructor() { }
}
