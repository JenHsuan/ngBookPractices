import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  selectedRecipe: Recipe = this.recipes[0];
  subscription: Subscription;
  //@Output() recipeItemSelected = new EventEmitter<Recipe>();
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription = this.recipeService.recipeChanged
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      })
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
