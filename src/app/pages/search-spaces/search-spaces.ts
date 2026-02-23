import { Component, inject, OnInit, signal } from '@angular/core';
import { Car } from '../../services/Car/car';
import { AsyncPipe } from '@angular/common';
import { debounceTime, distinctUntilChanged, Observable, switchMap } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchSpace } from '../../models/SearchSpace';
import { ParkingSpaces } from '../../services/parking-space';
import { ParkingSpace } from '../parking-space/parking-space';
import { IResponse } from '../../models/IResponse';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-spaces',
  imports: [RouterLink,ReactiveFormsModule],      //FormsModule,
  templateUrl: './search-spaces.html',
  styleUrl: './search-spaces.css',
})
export class SearchSpaces implements OnInit {

  carlist=signal<any[]>([]);
  parkingSpace=signal<any[]>([]);


  spaceForm:FormGroup=new FormGroup({
      city:new FormControl(''),
      carSizeId:new FormControl(''),
      maxPricePerMonth:new FormControl(''),
      isAvailable:new FormControl(null)
  });

  searchobj:SearchSpace=new SearchSpace();



  searchapi=inject(ParkingSpaces);

  constructor(private carobj:Car){
 
  }

  ngOnInit(): void {
    this.carobj.getCarSizes().subscribe({
      next:(res:any)=>{
        this.carlist.set(res.data);
      },
      error:(err:any)=>{

      }
    });
 
    this.GetAllSPaces();
    

    //  this.spaceForm.get('city')?.valueChanges
    // .pipe(
    //   debounceTime(400),          // wait while user typing
    //   distinctUntilChanged(),     // avoid duplicate calls
    //   switchMap(value => {

    //     if (!value) {
    //       return this.api.getAllSpaces();   // show all when empty
    //     }

    //     return this.api.searchByCity(value); // search API
    //   })
    // )
    // .subscribe(res => {
    //   this.parkingSpace.set(res.data);
    // });


    
   
  }
  Searchspacs(){

   // alert('hii');
  }
  GetAllSPaces(){
    //if(this.)
     this.searchapi.GetAllSpaces().subscribe({
      next:(res:any)=>{
      this.parkingSpace.set(res.data);
      },
      error:(err:any)=>{

      }
    })
  }
  // OnSearch(form:any){
  //   debugger;
  //   const data = this.searchobj
  // this.searchapi.SearchParkingSpaces(form.value).subscribe({
  //   next:(res:any)=>{
  //     debugger;
  //     this.parkingSpace.set(res.data);
  //   },
  //   error:(err:any)=>{

  //   }
  // })
  // }

  OnSearch(){
    debugger;
    
    if(this.spaceForm.controls['carSizeId'].value == ''){
      this.spaceForm.controls['carSizeId'].patchValue(null);
    }
    if(this.spaceForm.controls['maxPricePerMonth'].value==''){
      this.spaceForm.controls['maxPricePerMonth'].patchValue(null);
    }
    
    const data = this.spaceForm.value;

    this.searchapi.SearchParkingSpaces(data).subscribe({
    next:(res:any)=>{
      debugger;
      this.parkingSpace.set(res.data);
    },
    error:(err:any)=>{

    }
  })
  }
}
