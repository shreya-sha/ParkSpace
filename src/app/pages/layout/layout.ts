import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { Auth } from '../../services/auth';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,RouterLink ,AsyncPipe],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {
   Name:Observable<any>
  constructor(private http: Auth){
    debugger;
    // this.Name=  this.http.loggedUserName();
    this.Name = this.http.username$
  }
  Logout(){
    this.http.logout();
    this.http.setEmptyUsername();
  }
}
