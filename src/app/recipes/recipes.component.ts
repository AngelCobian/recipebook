import { Recipe } from './recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor() { }

  ngOnInit() {
  }
  displayRecipe(recipe: Recipe) {
    // console.log("hello:", this.displayRecipe);
    this.selectedRecipe = recipe;
  }
}
