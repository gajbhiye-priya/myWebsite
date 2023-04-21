import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(private http:HttpClient) { }


  addRegi(payload:any){

    return this.http.post('http://localhost:3000/registration', payload)

  }

}
