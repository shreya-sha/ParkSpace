import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { links } from '../../constants/urls';
@Injectable({
  providedIn: 'root',
})
export class Car {
  constructor(private http:HttpClient){

  }

  getCarSizes(){
    return this.http.get(links.GetCarSizes);
  }
}
