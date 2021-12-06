import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css','../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients : Ingredient[] = [new Ingredient('Apple',5), new Ingredient('Banana',6)];

  constructor() { }

  ngOnInit(): void {
  }

}
