import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/comp1/home/home.component';
import { AboutusComponent } from './app/comp1/aboutus/aboutus.component';
import { EventsActsComponent } from './app/comp1/events-acts/events-acts.component';
import { ErrorComponent } from './app/comp1/error/error.component';
import { ContactComponent } from './app/comp1/contact/contact.component';

const routes: Routes = [
  {path:'home',title:'home',component:HomeComponent},
  {path:'aboutus',title:'about us ',component:AboutusComponent},
  {path:'eventsandacts',title:'events and acts',component:EventsActsComponent},
  {path:'contact',title:'contact',component:ContactComponent},
  {path:'',redirectTo:'home',pathMatch:'full' },
  {path:'**',title:'error',component:ErrorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
