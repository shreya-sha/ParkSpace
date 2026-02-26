import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL,API_METHODS,Controllers } from '../../constants/urls';
import { Auth } from '../auth';
@Injectable({
  providedIn: 'root',
})
export class Spacelisting {
  constructor(private http:HttpClient,private auths:Auth){

  }

  GetSpaceListings(){
    debugger;
    //get ownerid first
    let ownerId=  this.auths.getUserId();//.getRoleId();
    console.log(ownerId);
   return this.http.get(BASE_URL.BASELINK + Controllers.PARKINGSPACES + API_METHODS.PARKING_GETOWNER + ownerId );//links.GetOwnerParkingSpace + ownerId );//GetParkingSpaces);
  }
}
