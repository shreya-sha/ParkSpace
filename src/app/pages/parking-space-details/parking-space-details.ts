import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ParkingSpaces } from '../../services/parking-space';
import { Vehicles } from '../../services/Customer/vehicles';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Booking } from '../../services/Customer/booking';
import { IResponse } from '../../models/IResponse';
@Component({
  selector: 'app-parking-space-details',
  imports: [ReactiveFormsModule],
  templateUrl: './parking-space-details.html',
  styleUrl: './parking-space-details.css',
})
export class ParkingSpaceDetails implements OnInit {

//spaceDetails=signal<any[]>([]);
spaceDetails = signal<any | null>(null);
VehList=signal<any[]>([]);

ParkingSpaceId:number=0;
MonthlyPz:number =0; 

bookingForm:FormGroup=new FormGroup({
   bookingId : new FormControl(0),
  parkingSpaceId : new FormControl(0),
  customerId :new FormControl(0),
  vehicleId : new FormControl(0),
  startDate :new FormControl(''),
  endDate :new FormControl(''),
  monthlyPrice :new FormControl(0),
  bookingStatus: new FormControl('Available'),
  createdDate :new FormControl(new Date())

})


vehSer=inject(Vehicles);
authSer=inject(Auth);
bookingSer=inject(Booking);

constructor(private activatedRoute:ActivatedRoute , private http:ParkingSpaces){

}
ngOnInit(): void {
  debugger;
 let id =  this.activatedRoute.snapshot.paramMap.get('parkingSpaceId');
 this.ParkingSpaceId =Number(id);
this.http.GetParkingSpaceById(this.ParkingSpaceId).subscribe({
  next:(res:any)=>{
    debugger;
    this.MonthlyPz = res.data.pricePerMonth;
    this.spaceDetails.set([res.data]);
  },
  error:(err:any)=>{

  }
})
//load carlist as per userid
this.GetAllVehi();

}
GetAllVehi(){
 this.vehSer.getAllVehicles().subscribe({
  next:(res:any)=>{
    debugger;
    this.VehList.set(res.data);
  }
 })
}
//PARKINGSPACEID,CUSTID,VEHID

UpdateBookingForm(){

  //auth getUserId to store custid
  let CustomerId= this.authSer.getUserId();
  this.bookingForm.controls['customerId'].patchValue(CustomerId);
  this.bookingForm.controls['parkingSpaceId'].patchValue(this.ParkingSpaceId);
   
  this.bookingForm.controls['vehicleId'].patchValue(Number(this.bookingForm.controls['vehicleId'].value));
 // monthlyPrice :new FormControl(0),
  this.bookingForm.controls['monthlyPrice'].patchValue(this.MonthlyPz);
}

OnSave(){
  debugger;
   this.UpdateBookingForm();
  const data = this.bookingForm.value ;
  this.bookingSer.AddBooking(data).subscribe({
    next:(res:any)=>{
      debugger;
      alert(res.message);
    },
    error:(err:any)=>{
      alert(err.error.message);
    }
  })
}

}
