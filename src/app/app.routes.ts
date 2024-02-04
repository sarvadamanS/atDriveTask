import { Routes } from '@angular/router';
import { UserListComponentComponent } from './user-list-component/user-list-component.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'first-component', component: HomeComponent },
  { path: 'second-component', component: UserListComponentComponent },
];
