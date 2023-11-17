import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './app/comp1/menu/menu.component';
import { HomeComponent } from './app/comp1/home/home.component';
import { EventsActsComponent } from './app/comp1/events-acts/events-acts.component';
import { ErrorComponent } from './app/comp1/error/error.component';
import { ContactComponent } from './app/comp1/contact/contact.component';
import { AboutusComponent } from './app/comp1/aboutus/aboutus.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutusComponent,
    HomeComponent,
    EventsActsComponent,
    ErrorComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
