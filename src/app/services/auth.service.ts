import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environments';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = environment.API_URL;

  constructor(private http: HttpClient) { }


  register(user: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }
}
