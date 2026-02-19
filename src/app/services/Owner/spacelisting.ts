import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { links } from '../../constants/urls';
@Injectable({
  providedIn: 'root',
})
export class Spacelisting {
  constructor(private http:HttpClient){

  }

  GetSpaceListings(){
   return this.http.get(links.GetParkingSpaces);
  }
}
