import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Members } from '../classes/members';
import { Gallery } from '../classes/gallery';
const URL='http://localhost:3000/membre';
const URL2=" http://localhost:3000/gallery";
@Injectable({
  providedIn: 'root'
})
export class MembersService {



  constructor(private http:HttpClient) { }
  getMembres():Observable<Members[]>{
    return this.http.get<Members[]>(URL);
  }
  getGallery(): Observable<Gallery[]> {
    return this.http.get<Gallery[]>(URL2);
  }


}
