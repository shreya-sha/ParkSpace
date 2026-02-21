import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParkingSpaces } from '../../services/parking-space'
import { Car } from '../../services/Car/car';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';

@Component({
  selector: 'app-parking-space',
  imports: [ReactiveFormsModule, NgFor, RouterLink,NgIf],
  templateUrl: './parking-space.html',
  styleUrl: './parking-space.css',
})
export class ParkingSpace implements OnInit {

  carList = signal<any[]>([]);

  parkSpaceForm: FormGroup = new FormGroup({
    parkingSpaceId: new FormControl(0),
    ownerId: new FormControl(0),
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    addressLine1: new FormControl('', [Validators.required]),
    addressLine2: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    pincode: new FormControl('', [Validators.required]),
    supportedCarSizeId: new FormControl(1, [Validators.required]),
    pricePerMonth: new FormControl(0, [Validators.required]),
    isAvailable: new FormControl(true),
    createdDate: new FormControl(new Date()),
  });

  constructor(private http: ParkingSpaces, private carhttp: Car, private auths: Auth) {

  }
  ngOnInit(): void {
    this.carhttp.getCarSizes().subscribe({
      next: (res: any) => {
        debugger;
        this.carList.set(res.data);
      }
    })
  }
  UpdateFormcontrols() {
    let OwnerID = this.auths.getUserId() ; //getRoleId();
    this.parkSpaceForm.patchValue({
      ownerId: OwnerID

    });
  }
  OnSave() {
    debugger;
    this.UpdateFormcontrols();
    const data = this.parkSpaceForm.value;
    this.http.PostParkingSpace(data).subscribe({
      next: (res: any) => {
        debugger;
        alert(res.message);
        this.ResetForm();
      },
      error: (err: any) => {

      }
    })
  }

  ResetForm(){
    this.parkSpaceForm.reset();
  }
}
