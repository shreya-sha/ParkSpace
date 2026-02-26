// export const links = {
//     'GetRoles': "https://feestracking.freeprojectapi.com/api/parkSpaceRoles/get-all-roles",
//     'RegUser': 'https://feestracking.freeprojectapi.com/api/parkSpaceUsers/register-user',
//     'LoginUser': 'https://feestracking.freeprojectapi.com/api/parkSpaceUsers/login',

//     'PostParkSpace': 'https://feestracking.freeprojectapi.com/api/parkSpaceParkingSpaces/create-parking-space',
//     'GetCarSizes': 'https://feestracking.freeprojectapi.com/api/parkSpaceCarSizes/get-all-car-sizes',
//     'GetParkingSpaces': 'https://feestracking.freeprojectapi.com/api/parkSpaceParkingSpaces/get-all-parking-spaces',
//     'GetOwnerParkingSpace': 'https://feestracking.freeprojectapi.com/api/parkSpaceParkingSpaces/get-owner-parking-spaces/',
//     'SearchParkingSpace': 'https://feestracking.freeprojectapi.com/api/parkSpaceParkingSpaces/search-parking-spaces',
//     'GetAllParkingSpaces': 'https://feestracking.freeprojectapi.com/api/parkSpaceParkingSpaces/get-all-parking-spaces',
//     'GetParkingSpaceByID': 'https://feestracking.freeprojectapi.com/api/parkSpaceParkingSpaces/get-parking-space-by-id/',
//     'UpdateParkingSpace':'https://feestracking.freeprojectapi.com/api/parkSpaceParkingSpaces/update-parking-space/',
//     'DeletePakingSpace':'https://feestracking.freeprojectapi.com/api/parkSpaceParkingSpaces/delete-parking-space/',
    
//     //All related to Customer 
//     //vehiclels
//     'PostVehicle': 'https://feestracking.freeprojectapi.com/api/parkSpaceVehicles/create-vehicle',
//     'GetAllVehicles': 'https://feestracking.freeprojectapi.com/api/parkSpaceVehicles/get-all-vehicles',
//     'GetvehicleById': 'https://feestracking.freeprojectapi.com/api/parkSpaceVehicles/get-vehicle-by-id/', //id is here 
//     'DeleteVehicle': 'https://feestracking.freeprojectapi.com/api/parkSpaceVehicles/delete-vehicle/',
//     'EditVehicle': 'https://feestracking.freeprojectapi.com/api/parkSpaceVehicles/update-vehicle/',
//     'GetVehiclesByUserID':'https://feestracking.freeprojectapi.com/api/parkSpaceVehicles/get-vehicles-by-user/',
//     // For Customer
//     'PostBooking':'https://feestracking.freeprojectapi.com/api/parkSpaceParkingBookings/create-booking',
//     'GetAllBookings':'https://feestracking.freeprojectapi.com/api/parkSpaceParkingBookings/get-all-bookings',
//     'GetBookingById':'https://feestracking.freeprojectapi.com/api/parkSpaceParkingBookings/get-booking-by-id/',
//     'GetBookingByCustomerId':'https://feestracking.freeprojectapi.com/api/parkSpaceParkingBookings/get-bookings-by-customer/',
//     'GetBooingByParkingSpaceId':'https://feestracking.freeprojectapi.com/api/parkSpaceParkingBookings/get-bookings-by-space/',
//      //subscriptions
//      'GetPlans':'https://feestracking.freeprojectapi.com/api/parkSpaceSubscriptionPlans/get-all-plans'

// }

// export const API={
//    BASE_URL:'https://feestracking.freeprojectapi.com/api',
//    ROLES:'/parkSpaceRoles',
//    GetRoles:'/get-all-roles',
   
//    PS:'/parkSpaceParkingSpaces',
//    'CREATE':'/create-parking-space',
//    'GETALL':'/get-all-parking-spaces',
// }

export const BASE_URL={
    BASELINK:'https://feestracking.freeprojectapi.com/api/'
}
export const Controllers={
   PARKINGSPACES: 'parkSpaceParkingSpaces/',
   PARKCARSIZES:'parkSpaceCarSizes/',
   PARKSPACEBOOKINGS:'parkSpaceParkingBookings/',
   PARKINGIAMGES:'parkSpaceParkingSpaceImages/',
   PARKINGSPACESVIEWS:'parkSpaceParkingSpaceViews/',
   PARKINGROLES:'parkSpaceRoles/',
   PARKINGSUBSCRIPTIONSPLANS:'parkSpaceSubscriptionPlans/',
   PARKINGUSERS:'parkSpaceUsers/',
   PARKINGUSERSUBPALNS:'parkSpaceUserSubscriptions/',
   PARKINGVEHICLES:'parkSpaceVehicles/'

}

export const API_METHODS ={
    CAR_POST:'create-car-size',
    CAR_GETALL:'get-all-car-sizes',
    CAR_GETBYID:'get-car-size-by-id/',
    CAR_UPDATE:'update-car-size/',
    CAR_DELETE:'delete-car-size/',
    
    PARKING_POST:'create-parking-space',
    PARKING_GETALL:'get-all-parking-spaces',
    PARKING_GETOWNER:'get-owner-parking-spaces/',
    PARKING_SEARCH:'search-parking-spaces',
    PARKING_GET_ID:'get-parking-space-by-id/',
    PARKING_UPDATE:'update-parking-space/',
    PARKING_DELETE:'delete-parking-space/',

    VEHICLE_CREATE:'create-vehicle',
    VEHICLE_GETALL:'get-all-vehicles',
    VEH_GET_BYID:'get-vehicle-by-id/',
    VEH_GET_BYUSERID:'get-vehicles-by-user/',
    VEH_DELETE:'delete-vehicle/',
    VEH_UPDATE:'update-vehicle/',

    BOOKING_CREATE:'create-booking',
    BOOKING_GETALL:'get-all-bookings',
    BOOKING_BYID:'get-booking-by-id/',
    BOOKING_CUSTOMERID:'get-bookings-by-customer/',
    BOOKING_DELETE:'delete-booking/',
    BOOKING_UPDATE:'update-booking/',

    SUB_PLANS_GETALL:'get-all-plans',

    ROLES_GETALL:'get-all-roles',
    REG_USER:'register-user',
    LOGINN:'login',

    PLANS_GETALL:'get-all-plans'

}

// export const API = {
//     BASEURL:'https://feestracking.freeprojectapi.com/api/',
//         CARSIZES: 'parkSpaceCarSizes/',
//             ACTIONS: {
//     CREATE: 'create-car-size',
//         GET: 'get-all-car-sizes',
//             GET_ID: 'get-car-size-by-id/',
//                 UPDATE: 'update-car-size/',
//                     DELETE: '/delete-car-size/'
// },
// PARKINGBOOKINGS: 'parkSpaceParkingBookings/',
//     BACTIONS: {
//     CREATE: 'create-booking',
//         GET: 'get-all-bookings',
//             GET_ID: 'get-booking-by-id/',
//                 GET_CUSTID: 'get-bookings-by-customer/',
//                     GET_PARKINGID: 'get-bookings-by-space/',
//                         PUT: 'update-booking/',
//                             DELETE: 'delete-booking/'

// },
// PS:'/parkSpaceParkingSpaces',
// PACTIONS:{
//    CREATE:'/create-parking-space',
//     GETALL:'/get-all-parking-spaces',
//     GET:'/'
// }
// }