import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { login } from '../../models/login';
import { User } from '../../services/user';
import { AsyncPipe, NgIf } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { IResponse } from '../../models/IResponse';

@Component({
  selector: 'app-login',
  imports: [RouterLink, FormsModule, NgIf],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login implements OnInit, OnDestroy {

  loginobj: login = new login();
  UserRoles$!: Observable<any[]>;

  subscription: Subscription[] = [];

  constructor(private http: User) {

  }

  ngOnInit(): void {
    this.UserRoles$ = this.http.getAllRoles();
  }
  OnLogin(form: any) {
    debugger;
    const data = this.loginobj;
    let s1 = this.http.PostLogin(data).subscribe({
      next: (res: IResponse) => {
        alert(res.message);
        form.reset();
        // this.ClearFormcontrols();
        localStorage.setItem('user', JSON.stringify(res.data));

      },
      error: (err: any) => {
        alert(err.error.message);
      }
    })

    this.subscription.push(s1);
  }
  ClearFormcontrols() {
    this.loginobj.email = '';
    this.loginobj.passwordHash = '';
  }

  ngOnDestroy(): void {
    this.subscription.forEach(m => m.unsubscribe());
  }
}
