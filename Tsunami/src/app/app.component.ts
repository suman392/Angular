import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'Tsunami';

  portBlair : string[] = [];
  island : number[] = [] ;

  portBlairGate(docShip : string){
    this.portBlair.push(docShip)
  }

  islandGate(soliderShip : number){
    this.island.push(soliderShip)
  }
}
