import { Component, OnInit } from '@angular/core';
import { User } from '../../services/user';
import { Observable } from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  imports: [AsyncPipe,NgFor,ReactiveFormsModule],
  templateUrl: './register-user.html',
  styleUrl: './register-user.css',
})
export class RegisterUser implements OnInit {

  UserList$!:Observable<any[]>;
  userform :FormGroup=new FormGroup({
     userId:new FormControl(0),
     fullName:new FormControl(''),
     email:new FormControl(''),
     phoneNumber:new FormControl(''),
     passwordHash:new FormControl(''),
     roleId:new FormControl(''),
     city:new FormControl(''),
     isActive:new FormControl(true),
     createdDate:new FormControl(new Date())
  });

  constructor(private http:User,private router :Router){

  }
  OnRegister(){
    const data=this.userform.value;
    this.http.PostUser(data).subscribe({
      next:(res:any)=>{
        debugger;
        alert(res.message);
        this.userform.reset();
        this.router.navigateByUrl('login');
      },
      error:(err:any)=>{

      }
    })

    debugger;
  }
  ngOnInit(): void {
    this.UserList$ = this.http.getAllUsers()
  }


}
