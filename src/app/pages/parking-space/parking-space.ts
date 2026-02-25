import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ParkingSpaces } from '../../services/parking-space'
import { Car } from '../../services/Car/car';
import { NgFor, NgIf } from '@angular/common';
import { RouterLink ,Router} from '@angular/router';
import { Auth } from '../../services/auth';
import { ActivatedRoute } from '@angular/router';
import { parkingSpace } from '../../models/parkingSpace';


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

  ParkingSpaceID_Ed:number =0;
  isEditmode :boolean =false;

  parkingSpace!:parkingSpace;


  constructor(private http: ParkingSpaces, private carhttp: Car, private auths: Auth,private activatedroute:ActivatedRoute,private router:Router) {

  }
  getParkingid(){
    let id= 
       this.activatedroute.snapshot.paramMap.get('id');
        this.ParkingSpaceID_Ed =Number(id) ;
        debugger;

      if(this.ParkingSpaceID_Ed !=0){
        this.isEditmode=true;
        //Read the values first and fill the controls with values
this.http.GetParkingSpaceById(this.ParkingSpaceID_Ed).subscribe({
  next:(res:any)=>{
    debugger;
  //  this.MonthlyPz = res.data.pricePerMonth;
    //this.spaceDetails.set([res.data]);
     this.parkSpaceForm.patchValue(res.data);
  },
  error:(err:any)=>{

  }
})

       
      }
   // alert(id);
  }
  ngOnInit(): void {
    this.getParkingid();

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
  OnUpdate(){
       this.UpdateFormcontrols();  //FOR OWNER ID UPDATIONS
    this.http.UpdateParkingSpace(this.ParkingSpaceID_Ed,this.parkSpaceForm.value).subscribe({
      next:(res:any)=>{
             debugger;
             alert(res.message);
             this.ResetForm();
             //navigate to view my listing comp
             this.router.navigateByUrl('\owner-listings');
      },
      error:(err:any)=>{

      }
    })
     this.isEditmode=false;
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
