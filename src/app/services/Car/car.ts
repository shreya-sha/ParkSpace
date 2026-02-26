import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL,API_METHODS,Controllers } from '../../constants/urls';
import { Observable } from 'rxjs';
import { IResponse } from '../../models/IResponse';
@Injectable({
  providedIn: 'root',
})
export class Car {
  constructor(private http:HttpClient){

  }
  getCarSizes():Observable<IResponse>{
    return this.http.get<IResponse>(BASE_URL.BASELINK + Controllers.PARKCARSIZES + API_METHODS.CAR_GETALL)
    //(links.GetCarSizes);
  }
}
