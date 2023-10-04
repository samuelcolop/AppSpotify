import {Routes} from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const ROUTES: Routes= [
    {path: 'home',component: HomeComponent},
    {path: 'search',component: SearchComponent},
    {path: 'artist/:id',component: ArtistaComponent},
    {path: '',pathMatch: 'full',redirectTo: 'home'},
    {path: 'search', pathMatch: 'full', redirectTo:'home'}
];
