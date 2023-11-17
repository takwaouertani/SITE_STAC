import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from '../classes/events';
import { Eventschedule } from '../classes/eventschedule';
const URL1="http://localhost:3000/eventschedule";
const URL="http://localhost:3000/evenement"

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http:HttpClient) { }
  getEvent():Observable<Events[]>{
    return this.http.get<Events[]>(URL);
  }
gettableau():Observable<Eventschedule[]>{
  return this.http.get<Eventschedule[]>(URL1);
}

}
