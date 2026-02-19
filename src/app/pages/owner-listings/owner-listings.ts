import { Component, OnInit, signal } from '@angular/core';
import { Spacelisting } from '../../services/Owner/spacelisting';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-owner-listings',
  imports: [RouterLink],
  templateUrl: './owner-listings.html',
  styleUrl: './owner-listings.css',
})
export class OwnerListings implements OnInit {

  spaceLists=signal<any[]>([]);

  constructor(private http:Spacelisting){

  }
  ngOnInit(): void {
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
}
