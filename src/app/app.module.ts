import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { RecipeListComponent } from './Components/Recipes/recipe-list/recipe-list.component';
import { RecipeDetailsComponent } from './Components/Recipes/recipe-details/recipe-details.component';
import { RecipeItemComponent } from './Components/Recipes/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './Components/Shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './Components/Shopping/shopping-edit/shopping-edit.component';
import { RecipeAddComponent } from './Components/Recipes/recipe-add/recipe-add.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeListComponent,
    RecipeDetailsComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeAddComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
