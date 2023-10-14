import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RecipeApp';
  loadFeature = "Recipes";

  onNavigate(feature:string){
    this.loadFeature = feature;
  }
  
}
