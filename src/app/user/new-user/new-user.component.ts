import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

   
	_user ={
    username: null,
    name: null,
    email:null,
    city: null,
    rideInGroup: null,
    DayOfWeek: null
    
  }


  constructor() { }

  ngOnInit() {
  }


  saveInfos(){
    console.log(this._user)
    alert(`
      Username: ${this._user.username} 
      Name: ${this._user.name}
      e-mail: ${this._user.email} 
      City: ${this._user.city}
    
    
    Saving...(just kidding)  `)
    
  }

  
}
