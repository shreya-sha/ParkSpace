import { Component, OnInit, signal } from '@angular/core';
import { Spacelisting } from '../../services/Owner/spacelisting';
import { RouterLink ,Router} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ParkingSpaces } from '../../services/parking-space';

@Component({
  selector: 'app-owner-listings',
  imports: [RouterLink,CommonModule],
  templateUrl: './owner-listings.html',
  styleUrl: './owner-listings.css',
})
export class OwnerListings implements OnInit {

  spaceLists=signal<any[]>([]);

  constructor(private http:Spacelisting,private router:Router,private api:ParkingSpaces){

  }
  GetListings(){
     this.http.GetSpaceListings().subscribe({
      next:(res:any)=>{
       debugger;
        this.spaceLists.set(res.data);
      },
      error:(err:any)=>{
  debugger;
      }
    })
  }
  ngOnInit(): void {
    debugger;
   this.GetListings();
  }
  OnEdit(id:number){
    alert(id);
    this.router.navigateByUrl("/park-space/"+id);
  }
  OnDelete(id:number){
    debugger;

    this.api.DeleteParkingSpace(id).subscribe({
      next:(res:any)=>{
         alert(res.message);
         this.GetListings();
      },
      error:(err:any)=>{
        alert(err.error.message);
      }
    })
  }
}
