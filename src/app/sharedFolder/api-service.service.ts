import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private _http:HttpClient) { }
    //now we will use post method
    postSignup(data:any){
      return this._http.post<any>("http://localhost:3000/signup",data)
    }
     //now get method
  getlog(data:any){
    return this._http.get<any>("http://localhost:3000/signup").pipe(map((res:any)=>{
      return res;
    }))
}
}
