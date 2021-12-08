import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'gameProject';

  odd : number[] = [];
  even :number[] = [];

  numGate(one : number){
    if(one %2===0){
    this.even.push(one);
    } else {
      this.odd.push(one);
    }
  }  
}
