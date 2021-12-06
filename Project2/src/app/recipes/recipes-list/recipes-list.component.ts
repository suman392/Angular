import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'simple test', './../../assets/food_photo.webp')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
