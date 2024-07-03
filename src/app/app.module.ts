import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './components/car-list/car-list.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { UserListComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CarrelloComponent } from './components/carrello/carrello.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarListComponent,
    ContattiComponent,
    UserListComponent,
    UserDetailComponent,
    LoginComponent,
    RegisterComponent,
    CarrelloComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
