import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL,API_METHODS,Controllers } from '../../constants/urls';
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
   return this.http.post<IResponse>(BASE_URL.BASELINK + Controllers.PARKINGVEHICLES + API_METHODS.VEHICLE_CREATE , vehicle);//links.PostVehicle,vehicle);
  }
  getAllVehicles():Observable<IResponse>{ 
    debugger;
    const UserId= this.authSer.getUserId()
    return this.http.get<IResponse>(BASE_URL.BASELINK + Controllers.PARKINGVEHICLES + API_METHODS.VEH_GET_BYUSERID + UserId);//links.GetVehiclesByUserID + UserId);
  }
  GetSelectedVehicle(id:number){
    debugger;
    return this.http.get<IResponse>(BASE_URL.BASELINK + Controllers.PARKINGVEHICLES + API_METHODS.VEH_GET_BYID + id);//links.GetvehicleById + id)
  }
  UpdateVehicle(id:number,vehobj:Car){
    debugger;
    let s=BASE_URL.BASELINK + Controllers.PARKINGVEHICLES + API_METHODS.VEH_UPDATE +id ;
    return this.http.put( s,vehobj );//links.EditVehicle + id ,vehobj)
  }
}
