import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { Observable, Subscription } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IResponse } from '../../models/IResponse';

@Component({
  selector: 'app-register-user',
  imports: [NgFor, ReactiveFormsModule, NgIf, AsyncPipe],
  templateUrl: './register-user.html',
  styleUrl: './register-user.css',
})
export class RegisterUser implements OnInit, OnDestroy {

  UserRoles$!: Observable<any[]>;

  subscription: Subscription[] = [];

  userform: FormGroup = new FormGroup({
    userId: new FormControl(0),
    fullName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', [Validators.required]),
    passwordHash: new FormControl('', [Validators.required]),
    roleId: new FormControl('', [Validators.required]),
    city: new FormControl(''),
    isActive: new FormControl(true),
    createdDate: new FormControl(new Date())
  });

  constructor(private http: User, private router: Router) {

  }
  OnRegister() {
    const data = this.userform.value;
    let s1 = this.http.PostUser(data).subscribe({
      next: (res: IResponse) => {
        debugger;
        alert(res.message);
        this.userform.reset();
        this.router.navigateByUrl('login');
      },
      error: (err: any) => {
        debugger;
      }
    })

    this.subscription.push(s1);
    debugger;
  }
  ngOnInit(): void {
    this.UserRoles$ = this.http.getAllRoles()
  }
  ngOnDestroy(): void {
    this.subscription.forEach((m => m.unsubscribe()));
  }

}
