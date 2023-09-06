import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class GuestServiceService {

  constructor(private client:HttpClient) { }  
  
  //Connect Frondend and Backend
  adminapi='http://localhost:3000/admin';
  facultyapi='http://localhost:3000/facultylogin';
  studentapi='http://localhost:3000/studentlogin';

  adminLogin():Observable<any>
  {
    return this.client.get(`${this.adminapi}`);
  }

  facultyLogin():Observable<any>
  {
    return this.client.get(`${this.facultyapi}`);
  }

  Studentlogin():Observable<any>
  {
    return this.client.get(`${this.studentapi}`);
  }
}