import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Vehicles } from '../../../services/Customer/vehicles';
import { Car } from '../../../services/Car/car';
import { Observable, Subscription } from 'rxjs';
import { IResponse } from '../../../models/IResponse';
import { Auth } from '../../../services/auth';

@Component({
  selector: 'app-customer-vehicles',
  imports: [ReactiveFormsModule],
  templateUrl: './customer-vehicles.html',
  styleUrl: './customer-vehicles.css',
})
export class CustomerVehicles implements OnInit,OnDestroy {

  vehicleForm: FormGroup = new FormGroup({
    vehicleId: new FormControl(0),
    userId: new FormControl(0),
    vehicleNumber: new FormControl(''),
    vehicleBrand: new FormControl(''),
    vehicleModel: new FormControl(''),
    carSizeId: new FormControl(0),
    createdDate: new FormControl(new Date())
  });

  carList = signal<any[]>([]);
  vehiclesList = signal<any[]>([]);

  IsUpdate: boolean = false;

  subscription:Subscription[]=[];

  ngOnInit(): void {
    this.GetAllVehicles();

   let s= this.carSer.getCarSizes().subscribe({
      next: (res: any) => {
        this.carList.set(res.data);
      },
      error: (error: any) => {
        debugger;
      }
    });

    this.subscription.push(s);
  }
  constructor(private vehSer: Vehicles, private carSer: Car, private authSer: Auth) {

  }

  PatchValues() {
    debugger;
    const UserId = this.authSer.getUserId();
    this.vehicleForm.controls['userId'].patchValue(UserId);
  }
  AddVehicle() {
    debugger;

    this.PatchValues();
    const data = this.vehicleForm.value;


    let s= this.vehSer.AddVehicle(data).subscribe({
      next: (res: IResponse) => {
        debugger;
        alert(res.message);
        this.ResetFormcontrols();

        this.GetAllVehicles();
      },
      error: (err: any) => {

      }
    })

    this.subscription.push(s);
  }
  ResetFormcontrols() {
    this.vehicleForm.reset();
  }
  OnEdit(id: number) {
    this.IsUpdate = true;

   let s= this.vehSer.GetSelectedVehicle(id).subscribe({
      next: (res: any) => {
        debugger;
        this.vehicleForm.patchValue(res.data);
      },
      error: (err: any) => {
        debugger;
      }
    })
  this.subscription.push(s);
  }
  UpdateVehicle() {

    debugger;
    const data = this.vehicleForm.value;
    const vId = this.vehicleForm.controls['vehicleId'].value
   let s=  this.vehSer.UpdateVehicle(vId, data).subscribe({
      next: (res: any) => {
        debugger;
        alert(res.message);
        this.ResetFormcontrols();
        this.GetAllVehicles();
      }
    })
  this.subscription.push(s);

    this.IsUpdate = false;
  }
  DeleteVehicle() {

  }
  GetAllVehicles() {
  let s=  this.vehSer.getAllVehicles().subscribe({
      next: (res: IResponse) => {
        debugger;
        this.vehiclesList.set(res.data);
      }
    })

    this.subscription.push(s);
  }
  ngOnDestroy(): void {
    this.subscription.forEach((s=>s.unsubscribe()));
  }
}
