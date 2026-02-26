import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL,API_METHODS,Controllers } from '../constants/urls';
import { parkingSpace } from '../models/parkingSpace';
import { Observable } from 'rxjs';
import { IResponse } from '../models/IResponse';
@Injectable({
  providedIn: 'root',
})
export class ParkingSpaces {
  
  http=inject(HttpClient);
  constructor(){

  }

  PostParkingSpace(obj:parkingSpace):Observable<IResponse>{
    return this.http.post<IResponse>(BASE_URL.BASELINK + Controllers.PARKINGSPACES + API_METHODS.PARKING_POST ,obj);//links.PostParkSpace,obj);
  }

  SearchParkingSpaces(obj:any){
    return this.http.post(BASE_URL.BASELINK + Controllers.PARKINGSPACES + API_METHODS.PARKING_SEARCH ,obj);//links.SearchParkingSpace,obj);
  }
  GetAllSpaces(){
    debugger;
     let s=BASE_URL.BASELINK + Controllers.PARKINGSPACES + API_METHODS.PARKING_GETALL;
    return this.http.get(s);//links.GetAllParkingSpaces);
  }
  GetParkingSpaceById(ParkingId:number):Observable<IResponse>{
      return this.http.get<IResponse>(BASE_URL.BASELINK + Controllers.PARKINGSPACES + API_METHODS.PARKING_GET_ID + ParkingId);//links.GetParkingSpaceByID + ParkingId);
  }
  UpdateParkingSpace(id:number,PrkingObj:parkingSpace):Observable<IResponse>{
    debugger;
    return this.http.put<IResponse>(BASE_URL.BASELINK + Controllers.PARKINGSPACES + API_METHODS.PARKING_UPDATE + id ,PrkingObj);//links.UpdateParkingSpace +id,PrkingObj);
  }
  DeleteParkingSpace(id:number){
    return this.http.delete(BASE_URL.BASELINK + Controllers.PARKINGSPACES + API_METHODS.PARKING_DELETE +id);//links.DeletePakingSpace + id);
  }
 
}
