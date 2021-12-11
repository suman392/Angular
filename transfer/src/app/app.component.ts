import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  title = 'transfer';

  userName : string = '';
  activePastore : string[] = [];
  inactivePastore : string[] = [];
  
  activeTrans(){
    this.activePastore.push(this.userName);
  }

  activeGate(moon : number){
    this.inactivePastore.push(this.activePastore[moon]);
    this.activePastore.splice(moon,1);
  }

  inactiveGate(planet : number){
    this.activePastore.push(this.inactivePastore[planet]);
    this.inactivePastore.splice(planet,1);
  }
}
