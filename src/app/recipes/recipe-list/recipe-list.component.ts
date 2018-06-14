import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [{
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

  constructor() { }

  ngOnInit() {
  }

}
