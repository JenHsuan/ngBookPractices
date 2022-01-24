import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit, OnDestroy {
  //@Input() recipe: Recipe;
  recipe: Recipe;
  paramsSubscription: Subscription;
  id: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id'])
    this.id = +this.route.snapshot.params['id']
    this.paramsSubscription = this.route.params
      .subscribe((params: Params) => {
        this.id = +params['id']
        this.recipe = this.recipeService.getRecipe(+params['id']);
      })
  }

  onAddShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route})
    //this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route})
  }
}
