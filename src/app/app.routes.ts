import { Routes } from '@angular/router';
import { UserInfoComponent } from './User/user-info/user-info.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

export const routes: Routes = [
    {
        path: 'user',
        component: UserInfoComponent,
    },
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: '**', redirectTo: 'user' },
    {
        path: 'navbar',
        component: NavBarComponent,
    }
];
