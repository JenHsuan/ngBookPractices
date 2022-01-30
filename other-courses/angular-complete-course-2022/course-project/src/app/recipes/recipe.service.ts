import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();
  //recipeSelected = new Subject<Recipe>();
  recipeChanged = new Subject<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe(
      'a1',
      'b1',
      'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png',
      [new Ingredient('meet', 1)]),
    new Recipe(
      'a2',
      'b2',
      'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png',
      [new Ingredient('t', 10)])
  ]

  constructor(
    private shoopingListService: ShoppingListService,
  ) { }

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

  deleteIngredient(recipeIndex: number, ingredientIndex: number) {
    this.recipes[recipeIndex].ingredients.splice(ingredientIndex, 1);
  }

  deleteRecipe(index: number){
    this.recipes.splice(index, 1);
    this.recipeChanged.next(this.recipes.slice());
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipeChanged.next(this.recipes.slice());
  }
}
