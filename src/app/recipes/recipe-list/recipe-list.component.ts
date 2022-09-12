import {
  Component,
  OnInit /*, EventEmitter, Input, , Output */,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  // @Output() recipeWasSelected = new EventEmitter<Recipe>();
  // recipes: Recipe[] = [
  //   new Recipe(
  //     'Rice',
  //     'The Bowl of Rice',
  //     'https://www.washingtonpost.com/resizer/lbt4i8rpWS3c5MrMM_W7FEtyWpY=/arc-anglerfish-washpost-prod-washpost/public/65UUETHNTAI6ZH4QPHPR7MUCSY.jpg'
  //   ),
  //   new Recipe(
  //     'Noodles',
  //     'The Chicken Chow Mein',
  //     'https://images.immediate.co.uk/production/volatile/sites/30/2022/06/Chicken-chow-mein-7aeec1d.png'
  //   ),
  // ];
  recipes: Recipe[];
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipeService.getRecipes();
  }

  //   onRecipeSelected(recipe: Recipe) {
  //     this.recipeWasSelected.emit(recipe);
  //   }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
