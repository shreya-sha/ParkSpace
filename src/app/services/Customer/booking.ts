import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { links } from '../../constants/urls';
import { parkingBookings } from '../../models/ParkingBookings';

@Injectable({
  providedIn: 'root',
})
export class Booking {
  
  http=inject(HttpClient);
  
  constructor(){

  }
  AddBooking(bookingobj:parkingBookings){
     return this.http.post(links.PostBooking,bookingobj);
  }
}
