import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
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
}
