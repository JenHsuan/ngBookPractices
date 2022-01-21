import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('aa', 1),
    new Ingredient('aa', 10)
  ];
  ingredientAdded = new EventEmitter<Ingredient[]>();

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient): void {
    this.ingredients.push(ingredient);
    this.ingredientAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    //this.ingredients = [...this.ingredients, ...ingredients]
    this.ingredients.push(...this.ingredients);
    this.ingredientAdded.emit(this.ingredients.slice());
  }
}
