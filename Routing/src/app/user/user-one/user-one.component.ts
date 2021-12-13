import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-one',
  templateUrl: './user-one.component.html',
  styleUrls: ['./user-one.component.css' , '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class UserOneComponent implements OnInit {

  //  user : {id : number , name : string;}



  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.snapshot.params['id'],
    this.route.snapshot.params['name'];
  }

}
