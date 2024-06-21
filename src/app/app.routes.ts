import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LibraryComponent } from './pages/library/library.component';
import { EquationComponent } from './pages/equation/equation.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    { 
        path: '', 
        component: HomeComponent,
        title: "Home"
    },
    { 
        path: 'library', 
        component: LibraryComponent,
        title: "Library"
    },
    { 
        path: 'library/:id', 
        component: EquationComponent,
        title: "Details"
    },
    { 
        path: 'about', 
        component: AboutComponent,
        title: "About"
    },
];
