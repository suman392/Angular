import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class FactoryComponent implements OnInit {
  @Output() medicineTruck = new EventEmitter<string>();
  @Output() electronicTruck = new EventEmitter<number>();
  @Output() foodTruck = new EventEmitter<boolean>();

  medName: string = '';
  itemName: number = 0;
  dish: string = '';

  createMedicine() {
    this.medicineTruck.emit(this.medName);
  }

  createElectronic() {
    this.electronicTruck.emit(this.itemName);
  }

  createFood() {
    let validFoods = ['burger', 'pizza']
    let result = false;
    if (validFoods.includes(this.dish)) {
      result = true
    }
    this.foodTruck.emit(result);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
