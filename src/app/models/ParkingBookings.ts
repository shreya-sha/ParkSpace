export class parkingBookings{
    bookingId :number;
  parkingSpaceId :number;
  customerId :number;
  vehicleId :number;
  startDate :Date;
  endDate :Date;
  monthlyPrice :number;
  bookingStatus: string;
  createdDate :Date;

  constructor(){
    this.bookingId=0;
    this.parkingSpaceId=0;
    this.customerId=0;
    this.vehicleId=0;
    this.startDate=new Date();
    this.endDate=new Date();
    this.monthlyPrice=0;
    this.bookingStatus='';
    this.createdDate=new Date();

  }
}
