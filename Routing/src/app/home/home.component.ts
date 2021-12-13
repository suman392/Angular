import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class HomeComponent implements OnInit {

  constructor(private sun : Router) { }

  ngOnInit(): void {
  }

  onService(){
    this.sun.navigate(['/service']);
  }

}
