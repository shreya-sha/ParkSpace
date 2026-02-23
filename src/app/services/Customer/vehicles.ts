import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { links } from '../../constants/urls';
import { Car } from '../Car/car';
import { Observable } from 'rxjs';
import { IResponse } from '../../models/IResponse';
import { Auth } from '../auth';
@Injectable({
  providedIn: 'root',
})
export class Vehicles {
  constructor(private http:HttpClient,private authSer:Auth){

  }
  AddVehicle(vehicle:Car):Observable<IResponse>{
   return this.http.post<IResponse>(links.PostVehicle,vehicle);
  }
  getAllVehicles():Observable<IResponse>{ 
    debugger;
    const UserId= this.authSer.getUserId()
    return this.http.get<IResponse>(links.GetVehiclesByUserID + UserId);
  }
}
