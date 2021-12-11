import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-active-user',
  templateUrl: './active-user.component.html',
  styleUrls: ['./active-user.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ActiveUserComponent implements OnInit {

  @Input() activeList : string[] = [];
  @Output() activeTruck = new EventEmitter<number>();

  setInactive(sun : number){
    this.activeTruck.emit(sun)
  
  }

  constructor() { }

  ngOnInit(): void {
  }
}
