import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { links } from '../../constants/urls';
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
   return this.http.get(links.GetOwnerParkingSpace + ownerId );//GetParkingSpaces);
  }
}
