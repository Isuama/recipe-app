import { /*EventEmitter,*/ Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
// /import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  //recipeSelected = new EventEmitter<Recipe>();
  //recipeSelected = new Subject<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Rice',
      'The Bowl of Rice',
      'https://www.washingtonpost.com/resizer/lbt4i8rpWS3c5MrMM_W7FEtyWpY=/arc-anglerfish-washpost-prod-washpost/public/65UUETHNTAI6ZH4QPHPR7MUCSY.jpg',
      [new Ingredient('Rice', 1), new Ingredient('Spinach', 3)]
    ),
    new Recipe(
      'Noodles',
      'The Chicken Chow Mein',
      'https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Chicken-chow-mein-7aeec1d.png',
      [new Ingredient('Noodles', 2), new Ingredient('Chicken', 4)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
