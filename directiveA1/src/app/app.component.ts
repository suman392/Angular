import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'directiveA1';
  showTopics = false;
  log: number[] = [];

  onToggleDisplay() {
    this.showTopics = !this.showTopics;
    this.log.push(this.log.length + 1);

  }

  getColor(index: number) {

    return {
      color: index % 2 == 0 ? 'green' : 'red',
      backgroundColor: index % 2 == 0 ? 'yellow' : 'white' , 
      bold : true
    }
  }



}
