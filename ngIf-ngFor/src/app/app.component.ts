import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'ngIf-ngFor';
 
  oddNumber = [1,3,5,7];
  evenNumber = [2,4,6,8];
  oddOnly = false;
}
