export class parkingSpace{
    parkingSpaceId: number;
  ownerId: number;
  title: string;
  description: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pincode: string;
  supportedCarSizeId: number;
  pricePerMonth: number;
  isAvailable: boolean;
  createdDate: string;

  constructor(){
    this.parkingSpaceId=0;
    this.ownerId=0;
    this.title="";
    this.description="";
    this.addressLine1="";
    this.addressLine2="";
    this.city="";
    this.pincode="";
    this.supportedCarSizeId=0;
    this.pricePerMonth=0;
    this.isAvailable=true;
    this.createdDate="";
  }
}