import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MostreComponent } from './mostre/mostre.component';
import { ListComponent } from './list/list.component';
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
    {path: '', redirectTo: '/Home', pathMatch: 'full'},
    {path: 'Home', component: HomeComponent},
    {path: 'List', component: ListComponent},
    {path: 'Mostre/:id', component: MostreComponent},
    {path: 'Navigation', component: NavigationComponent},


];
