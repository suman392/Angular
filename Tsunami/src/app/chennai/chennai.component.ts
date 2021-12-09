import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-chennai',
  templateUrl: './chennai.component.html',
  styleUrls: ['./chennai.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ChennaiComponent implements OnInit {

  @Output() shipChennai = new EventEmitter<string>();
  @Output() shipSoilder = new EventEmitter<number>();

  docs : string = '';
  soilders : number = 0;

  addDocname(){
    this.shipChennai.emit(this.docs);
  }

  addSoildernumber(){
    this.shipSoilder.emit(this.soilders);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
