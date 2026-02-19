import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { links } from '../constants/urls';
import { parkingSpace } from '../models/parkingSpace';
@Injectable({
  providedIn: 'root',
})
export class ParkingSpaces {
  
  http=inject(HttpClient);
  constructor(){

  }

  PostParkingSpace(obj:parkingSpace){
    return this.http.post(links.PostParkSpace,obj);
  }

}
