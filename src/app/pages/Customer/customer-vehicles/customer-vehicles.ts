import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Vehicles } from '../../../services/Customer/vehicles';
import { Car } from '../../../services/Car/car';
import { Observable } from 'rxjs';
import { IResponse } from '../../../models/IResponse';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-customer-vehicles',
  imports: [ReactiveFormsModule],
  templateUrl: './customer-vehicles.html',
  styleUrl: './customer-vehicles.css',
})
export class CustomerVehicles implements OnInit {

  vehicleForm:FormGroup=new FormGroup({
    vehicleId:new FormControl(0),
    userId:new FormControl(0),
    vehicleNumber:new FormControl(''),
    vehicleBrand:new FormControl(''),
    vehicleModel:new FormControl(''),
    carSizeId:new FormControl(0),
    createdDate:new FormControl(new Date())
  });

  carList=signal<any[]>([]);
  vehiclesList=signal<any[]>([]);

  IsUpdate:boolean=false;


 ngOnInit(): void {
    this.GetAllVehicles();

   this.carSer.getCarSizes().subscribe({
    next:(res:any)=>{
       this.carList.set(res.data);
    },
    error:(error:any)=>{
     debugger;
    }
   });
 }
  constructor(private vehSer:Vehicles,private carSer:Car,private authSer:Auth){

  }

  PatchValues(){
    debugger;
    const UserId= this.authSer.getUserId();
    this.vehicleForm.controls['userId'].patchValue(UserId);
  }
AddVehicle(){
 debugger;

 this.PatchValues();
 const data = this.vehicleForm.value;
  

 this.vehSer.AddVehicle(data).subscribe({
  next:(res:IResponse)=>{
          debugger;
          alert(res.message);
          this.ResetFormcontrols();
          
           this.GetAllVehicles();
  },
  error:(err:any)=>{

  }
 })
}
ResetFormcontrols(){
  this.vehicleForm.reset();
}
OnEdit(id:number){
  this.IsUpdate=true ;

  this.vehSer.GetSelectedVehicle(id).subscribe({
    next:(res:any)=>{
      debugger;
      this.vehicleForm .patchValue(res.data);
        }
  })
}
UpdateVehicle(){

 debugger;
 const data = this.vehicleForm.value;
 const vId= this.vehicleForm.controls['vehicleId'].value
 this.vehSer.UpdateVehicle(vId,data).subscribe({
  next:(res:any)=>{
    debugger;
       alert(res.message);
        this.ResetFormcontrols();
        this.GetAllVehicles();
  }
 })

  this.IsUpdate=false;
}
DeleteVehicle(){

}
GetAllVehicles()
{
  this.vehSer.getAllVehicles().subscribe({
    next:(res:IResponse)=>{
       debugger;
         this.vehiclesList.set(res.data);
    }
  })
}
}
