import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  post(api:string, data):any{
    return this.http.post(api, data, this.getHeaders());
  }

  get(api){
    return this.http.get(api, this.getHeaders());
  }

  getHeaders(){
    return {
      headers: new HttpHeaders({
        // 'content-type':'',
        // 'Authorization':'',
      })};
    };

  handleError(errorType,user) {

  };  
  
}

