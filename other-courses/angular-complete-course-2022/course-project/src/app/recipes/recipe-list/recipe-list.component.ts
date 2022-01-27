import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  // onRecipeItemSelected(recipe: Recipe) {
  //   this.selectedRecipe = recipe;
  //   this.recipeService.recipeSelected.next(this.selectedRecipe);
  //   //this.recipeItemSelected.emit(this.selectedRecipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route})
  }
}
