import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { UserService } from '../../shared/user.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  
})
export class ListComponent implements OnInit {

  users:any;
  
 

  
  list:string[] = ['Always','Sometimes','Never']
  resultList: string[]

  constructor(private userService: UserService ) { }

  ngOnInit() {
    this.getUsers()
  }

 
  getUsers(){

    this.userService.getUsers().subscribe(
      result =>{
        this.users = result
      } 
	);
	
  }
  
  getGroupInfo(){
	  //console.log(this.userService.getGroupInfo())   
    return this.userService.getGroupInfo()
  }

  getDayOfWeek(){
    return this.userService.getDayOfWeek()
  }
}
