import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class GameControlComponent implements OnInit {

  @Output() genNumber = new EventEmitter<number>();
  // @Output() evenNumber =new EventEmitter<number>();


  randomNum : number = 0;
  intervalId !: ReturnType<typeof setTimeout> ;
  startGame(){
    this.intervalId = setInterval(()=>{
      this.genNumber.emit(++this.randomNum)
    },1000)
  }

  stopGame(){
    clearInterval(this.intervalId)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
