import { Component, OnInit } from '@angular/core';
//import { RecipeListComponent } from './recipe-list/recipe-list.component';
// /import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService],
})
export class RecipesComponent implements OnInit {
  //selectedRecipe: Recipe;
  //constructor(private recipeService: RecipeService) {}
  constructor() {}

  ngOnInit() {
    // this.recipeService.recipeSelected.subscribe((recipe: Recipe) => {
    //   this.selectedRecipe = recipe;
    // });
  }
}
