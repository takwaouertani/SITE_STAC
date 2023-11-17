import { Component, OnInit } from '@angular/core';
import { EventsService } from '../../services/events.service';
import { Events } from '../../classes/events';
import { Eventschedule } from '../../classes/eventschedule';

@Component({
  selector: 'app-events-acts',
  templateUrl: './events-acts.component.html',
  styleUrls: ['./events-acts.component.css']
})

export class EventsActsComponent  {
 event:Events[]=[];
 eventschuedule:Eventschedule[]=[];

 

  constructor(private eventservice:EventsService){}
   ngOnInit(): void {
     this.eventservice.getEvent().subscribe(
       data =>{
        this.event=data
    });
     this.eventservice.gettableau().subscribe(
      datatab=>{
        this.eventschuedule=datatab;
      }
     );
   
     
   }

}
