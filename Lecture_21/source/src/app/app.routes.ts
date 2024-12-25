import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: 'rame',
    loadChildren: () => import('./components/rame/rame.routes').then(m => m.routes)
}];
