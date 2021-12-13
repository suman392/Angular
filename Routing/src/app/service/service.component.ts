import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css' , '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ServiceComponent implements OnInit {

  constructor(private moon : Router , private route : ActivatedRoute) { }

  ngOnInit(): void {
  }

  onReload(){
    this.moon.navigate(['/home'] , {relativeTo : this.route});

  }

}
