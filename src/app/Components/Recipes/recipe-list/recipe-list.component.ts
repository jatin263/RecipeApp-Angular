import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes:Recipe[] = [
    new Recipe("Recipe 1","Desc 1","https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),
    new Recipe("Recipe 2","Desc 2","https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg"),

  ];
  constructor() { 

  }

  ngOnInit(){
      
  }
  onRecipeSelected(){
    //console.log(recipe);
    alert("hii");
    //this.recipes.push(recipe);
  }

}
