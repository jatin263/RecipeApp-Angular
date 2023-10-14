import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-add',
  templateUrl: './recipe-add.component.html',
  styleUrls: ['./recipe-add.component.css']
})
export class RecipeAddComponent {
  recipe:Recipe = new Recipe("","","") ;
  @Output() newRecipeForm = new EventEmitter<Recipe>();

  constructor(){
    
  }
  addRecipe(){
    console.log(this.recipe);
    this.newRecipeForm.emit(this.recipe);
  }
}
