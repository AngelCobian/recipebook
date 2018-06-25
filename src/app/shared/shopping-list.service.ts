import { EventEmitter } from '@angular/core';
import { Ingredient } from './ingredient.model';


export class ShoppingListService {
    private ingredients: Ingredient[] = [
        {
            name: 'Apple',
            amount: 5
        },
        new Ingredient('Tomatoes', 10)
    ];

    ingredientChange = new EventEmitter<Ingredient[]>();

    getIngredients(): Ingredient[] {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientChange.emit(this.ingredients.slice());

    }
}
