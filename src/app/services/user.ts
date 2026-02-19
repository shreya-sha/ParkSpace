import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { links } from '../constants/urls';
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
       return this.http.get(links.GetRoles)
       .pipe(map((res:any)=>{
          return res.data;
        })
       );
       
   }
   PostUser(obj:User):Observable<IResponse>{
    return this.http.post<IResponse>(links.RegUser,obj);

   }

   PostLogin(obj:login):Observable<IResponse>{
    return this.http.post<IResponse>(links.LoginUser,obj);
   }

}
