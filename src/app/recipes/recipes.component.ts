import { RecipeService } from './recipe.service';
import { Recipe } from './recipe.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipeService.RecipeSelected.subscribe((recipe: Recipe) => {
      this.selectedRecipe = recipe;

    });
  }
  displayRecipe(recipe: Recipe) {
    // console.log("hello:", this.displayRecipe);
    this.selectedRecipe = recipe;
  }
  // onRecipeSelected(recipe: Recipe){
  //   this.RecipeSelected.emir
  // }
}
