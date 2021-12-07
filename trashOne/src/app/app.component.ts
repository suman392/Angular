import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {
  medicineStore: string[] = [];
  electronicStore: number[] = [];
  foodStore: boolean[] = [];

  medicineGate(medTruck : string){
    this.medicineStore.push(medTruck)
  }

  electronicGate(electTruck : number){
    this.electronicStore.push(electTruck)
  }

  foodGate(fooTruck : boolean){
    this.foodStore.push(fooTruck)
  }
}
