import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { BASE_URL,API_METHODS,Controllers } from '../constants/urls';
import { login } from '../models/login';
import { IResponse } from '../models/IResponse';
@Injectable({
  providedIn: 'root',
})
export class User {
     
   http=inject(HttpClient);

   constructor(){

   }

   getAllRoles():Observable<any[]>{
       return this.http.get(BASE_URL.BASELINK + Controllers.PARKINGROLES + API_METHODS.ROLES_GETALL) //links.GetRoles)
       .pipe(map((res:any)=>{
          return res.data;
        })
       );
       
   }
   PostUser(obj:User):Observable<IResponse>{
    return this.http.post<IResponse>(BASE_URL.BASELINK + Controllers.PARKINGUSERS + API_METHODS.REG_USER ,obj); //links.RegUser,obj);

   }

   PostLogin(obj:login):Observable<IResponse>{
    return this.http.post<IResponse>(BASE_URL.BASELINK + Controllers.PARKINGUSERS + API_METHODS.LOGINN,obj);//links.LoginUser,obj);
   }

}
