import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'a',
      'b',
      'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png',
      [new Ingredient('meet', 1)]),
    new Recipe(
      'a',
      'b',
      'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png',
      [new Ingredient('t', 10)])
  ]

  constructor(private shoopingListService: ShoppingListService){}
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    let result = this.recipes.slice()[index]
    return result;
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoopingListService.addIngredients(ingredients);
  }
}
