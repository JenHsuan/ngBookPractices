import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('a', 'b', 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png'),
    new Recipe('a', 'b', 'https://raw.githubusercontent.com/JenHsuan/ALayman/master/views/images/alaymanicon.png')
  ]
  selectedRecipe: Recipe = this.recipes[0];
  @Output() recipeItemSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit(): void {
  }

  onRecipeItemSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
    this.recipeItemSelected.emit(this.selectedRecipe);
  }

}
