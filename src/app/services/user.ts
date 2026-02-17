import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class User {
   apiurl="https://feestracking.freeprojectapi.com/api/parkSpaceRoles/get-all-roles";
    
   http=inject(HttpClient);

   constructor(){

   }

   getAllUsers(){
       return this.http.get<any[]>(this.apiurl)
       .pipe(map((res:any)=>{
          return res.data;
        })
       );
    
    
       
   }
   PostUser(obj:User){
    return this.http.post('https://feestracking.freeprojectapi.com/api/parkSpaceUsers/register-user',obj);

   }

}
