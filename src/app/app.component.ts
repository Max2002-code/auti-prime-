import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
})
export class AppComponent {
constructor(private http:HttpClient){
}
ngOnInit(){
this.getCandy();
}

getCandy(){
this.http.get('http://localhost:8080/api/test').subscribe(data=>{
console.log(data)
})
}
}