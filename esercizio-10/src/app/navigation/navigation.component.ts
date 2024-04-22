import { CommonModule } from '@angular/common';
import { Component,Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [HomeComponent, CommonModule, RouterOutlet],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
}
