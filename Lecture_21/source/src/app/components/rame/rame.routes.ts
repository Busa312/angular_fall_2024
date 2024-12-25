import { Routes } from '@angular/router';
import { RameComponent } from './rame.component';
import { RameChildComponent } from './rame-child/rame-child.component';

export const routes: Routes = [{
    path: '',
    component: RameComponent,
    children: [
        {
            path: '',
            component: RameChildComponent
        }
    ]
}];