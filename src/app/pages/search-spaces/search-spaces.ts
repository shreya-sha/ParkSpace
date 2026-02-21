import { Component, inject, OnInit, signal } from '@angular/core';
import { Car } from '../../services/Car/car';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { SearchSpace } from '../../models/SearchSpace';
import { ParkingSpaces } from '../../services/parking-space';
import { ParkingSpace } from '../parking-space/parking-space';
import { IResponse } from '../../models/IResponse';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-spaces',
  imports: [FormsModule,RouterLink],
  templateUrl: './search-spaces.html',
  styleUrl: './search-spaces.css',
})
export class SearchSpaces implements OnInit {

  carlist=signal<any[]>([]);
  parkingSpace=signal<any[]>([]);

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
  OnSearch(form:any){
    debugger;
    const data = this.searchobj
  this.searchapi.SearchParkingSpaces(form.value).subscribe({
    next:(res:any)=>{
      debugger;
      this.parkingSpace.set(res.data);
    },
    error:(err:any)=>{

    }
  })
  }
}
