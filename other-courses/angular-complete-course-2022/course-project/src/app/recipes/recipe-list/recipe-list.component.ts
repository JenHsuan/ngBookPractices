import { Component, OnInit } from '@angular/core';
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
  constructor() { }

  ngOnInit(): void {
  }

}
