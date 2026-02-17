export class User{
    userId: number;
  fullName: string ;
  email: string;
  phoneNumber: string;
  passwordHash: string;
  roleId: number ;
  city: string;
  isActive: boolean ;
  createdDate:string;

  constructor(){
    this.userId=0;
    this.fullName="";
    this.email="";
    this.phoneNumber="";
    this.passwordHash="";
    this.roleId=0;
    this.city="";
    this.isActive=true;
    this.createdDate="";
  }
}