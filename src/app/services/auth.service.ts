import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<any>(`${this.baseUrl}/login`, body.toString(), { headers }).pipe(
      map(response => {
        // Handle response as needed, e.g., store token in local storage
        if (response.status === 'ok') {
          localStorage.setItem('token', response.token);
        }
        return response;
      })
    );
  }

  register(username: string, password: string): Observable<any> {
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded'
    });

    return this.http.post<any>(`${this.baseUrl}/register`, body.toString(), { headers }).pipe(
      map(response => {
        // Handle response as needed
        return response;
      })
    );
  }
}
