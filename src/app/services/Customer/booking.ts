import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL,API_METHODS,Controllers } from '../../constants/urls';
import { parkingBookings } from '../../models/ParkingBookings';
import { Observable } from 'rxjs';
import { IResponse } from '../../models/IResponse';

@Injectable({
  providedIn: 'root',
})
export class Booking {
  
  http=inject(HttpClient);
  
  constructor(){

  }
  AddBooking(bookingobj:parkingBookings):Observable<parkingBookings>{
    debugger;
    let s=BASE_URL.BASELINK + Controllers.PARKSPACEBOOKINGS + API_METHODS.BOOKING_CREATE;
     return this.http.post<any>(BASE_URL.BASELINK + Controllers.PARKSPACEBOOKINGS + API_METHODS.BOOKING_CREATE, bookingobj);//links.PostBooking,bookingobj);
  }
}
