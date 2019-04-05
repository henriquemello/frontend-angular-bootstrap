import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  URL = "https://jsonplaceholder.typicode.com/users";
  
  list:string[] = ['Always','Sometimes','Never']
  days:string[] = ['Monday','Tuesday','Friday','Sunday']

   

  getUsers(){
    return this.http.get(`${this.URL}`);
  }

  getGroupInfo(){

    let randomItem = this.list[Math.floor(Math.random()*this.list.length)];
    return randomItem
  }
  getDayOfWeek(){
     
    let randomItem = this.days[Math.floor(Math.random()*this.days.length)];
    return randomItem
  }
}
