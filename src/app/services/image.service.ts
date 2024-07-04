import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl = 'http://localhost:8080/api/images/';

  constructor(private http: HttpClient) { }

  getImageUrl(imageId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}${imageId}`, { responseType: 'blob' });
  }
}
