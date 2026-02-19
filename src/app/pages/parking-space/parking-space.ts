import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import{ ParkingSpaces } from '../../services/parking-space'
import { Car } from '../../services/Car/car';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-parking-space',
  imports: [ReactiveFormsModule,NgFor,RouterLink],
  templateUrl: './parking-space.html',
  styleUrl: './parking-space.css',
})
export class ParkingSpace implements OnInit {
     
  carList=signal<any[]>([]);

     parkSpaceForm:FormGroup=new FormGroup({
      parkingSpaceId :new FormControl(0),
      ownerId :new FormControl(2),
      title :new FormControl('',[]),
      description :new FormControl('',[]),
      addressLine1 :new FormControl('',[]),
      addressLine2 :new FormControl('',[]),
      city :new FormControl('',[]),
      pincode :new FormControl('',[]),
      supportedCarSizeId :new FormControl(1,[]),
      pricePerMonth :new FormControl(0,[]),
      isAvailable :new FormControl(true),
      createdDate :new FormControl(new Date()),
     });
    
     constructor(private http:ParkingSpaces,private carhttp:Car){

     }
     ngOnInit(): void {
       this.carhttp.getCarSizes().subscribe({
        next:(res:any)=>{
          debugger;
            this.carList.set(res.data);
        }
       })
     }
     OnSave(){
      debugger;
      const data =this.parkSpaceForm.value;
       this.http.PostParkingSpace(data).subscribe({
        next:(res:any)=>{
           debugger;
           alert(res.message);
        },
        error:(err:any)=>{

        }
       })
     }
}
