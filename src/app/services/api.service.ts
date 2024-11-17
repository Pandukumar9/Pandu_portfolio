import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = "http://localhost:3000/contactus";

  constructor(private http:HttpClient) { }

  addContactsData(req:any):Observable<any>{
    return this.http.post(this.url, req);
  }
}
