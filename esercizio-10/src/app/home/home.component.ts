import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MostreComponent } from '../mostre/mostre.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeComponent, CommonModule,RouterOutlet, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
