import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];
  selectedRecipe: Recipe = this.recipes[0];
  //@Output() recipeItemSelected = new EventEmitter<Recipe>();
  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  onRecipeItemSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.recipeService.recipeSelected.emit(this.selectedRecipe);
    //this.recipeItemSelected.emit(this.selectedRecipe);
  }

}
