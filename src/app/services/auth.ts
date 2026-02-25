import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Auth {

  usernamesubject=new BehaviorSubject<string |null >(this.loggedUserName());
 
   username$ = this.usernamesubject.asObservable();

  setUsername(name:string){
    debugger;
  //  localStorage.setItem('user'),
   localStorage.setItem('user', name);

   const nm=this.loggedUserName();
  this.usernamesubject.next(nm);
  }
  getUser() {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }

  getRoleId(): number {
    debugger;
    return this.getUser().roleId;
  }

  getUserId(): number {
    debugger;
    return this.getUser().userId;
  }
  getRoleName(): string {
    let roleid = this.getUser().roleId;

    if (roleid == 1)
      return 'Owner'
    else if (roleid == 2)
      return 'Customer'
    else
      return 'Admin'
  }

  isOwner(): boolean {
    return this.getRoleName() === 'Owner';
  }

  isCustomer(): boolean {
    return this.getRoleName() === 'Customer';
  }

  logout() {
    localStorage.removeItem('user');
  }

  loggedUserName():string {
    debugger;
    return this.getUser().fullName;
  }
  setEmptyUsername() {
  this.usernamesubject.next('');
}
}
