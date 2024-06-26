import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient){
  }

  ngOnInit(){
    this.getauth();
    }
    getauth(){
    this.http.get('http://localhost:8080').subscribe(data=>{
    console.log(data)
    })
    }
    }
