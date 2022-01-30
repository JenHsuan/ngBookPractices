import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy{
  ingredients: Ingredient[] = []
  private igChangeSub: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }
  // Must unsubscribe when uing subscriptions
  ngOnDestroy(): void {
    this.igChangeSub.unsubscribe();
  }
  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientAdded.subscribe((recipes: Ingredient[]) => {
      this.ingredients = recipes;
    })
  }

  onEditItem(index: number) {
    this.shoppingListService.startEditing.next(index);
  }
}
