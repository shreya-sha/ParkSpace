export class MyCar{
      vehicleId: number;
  userId: number;
  vehicleNumber: string;
  vehicleBrand: string;
  vehicleModel: string;
  carSizeId: number;
  createdDate: Date;

  constructor(){
    this.vehicleId=0;
    this.carSizeId=0;
    this.userId=0;
    this.vehicleModel="";
    this.vehicleBrand="";
    this.vehicleNumber="";

    this.createdDate=new Date();
  }
}