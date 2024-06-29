import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { CommonModule } from '@angular/common';
import { ContattiComponent } from './components/contatti/contatti.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  { path: 'car-list', component: CarListComponent},
  {path: 'Contatti', component: ContattiComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
