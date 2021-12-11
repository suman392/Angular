import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-user',
  templateUrl: './inactive-user.component.html',
  styleUrls: ['./inactive-user.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class InactiveUserComponent implements OnInit {

  @Input() inactiveList : string[] = [];
  @Output() inactiveTruck = new EventEmitter<number>();

  setActive(star : number){
    this.inactiveTruck.emit(star);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
