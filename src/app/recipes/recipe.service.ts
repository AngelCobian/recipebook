import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService{
  private recipe: Recipe[] = [{
    name: 'a new recipe',
    description: 'test recipe',
    imagePath: 'https://images.media-allrecipes.com/images/56589.png',
  },
    new Recipe(
      'this is a test recipe',
      'this is a simple test',
      'https://cbspittsburgh.files.wordpress.com/2015/11/recipes-1024x576.jpg?w=1024&h=576&crop=1'

  )
];

RecipeSelected = new EventEmitter<Recipe>();

getRecipes(): Recipe {
  return this.recipe.slice(); // returns exact copy of original array.
}
}
