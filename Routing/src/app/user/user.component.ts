import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css' , '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class UserComponent implements OnInit {

  user : string[] = [];
  users = [{id : 1 , name : ' suman '} , {id : 2 , name : 'bhatt' }]

  constructor() { }

  ngOnInit(): void {
  }

}
