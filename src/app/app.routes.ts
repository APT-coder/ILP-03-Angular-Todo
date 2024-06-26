import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

export const routes: Routes = [
    {
        path: '', component: HomePageComponent
    }
];
