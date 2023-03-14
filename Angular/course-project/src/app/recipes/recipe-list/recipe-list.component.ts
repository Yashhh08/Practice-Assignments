import { Component, Output, EventEmitter } from '@angular/core';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  recipes: Recipe[] = [
    new Recipe("Sample Recipe 1", "descripion 1", "https://media.istockphoto.com/id/1196705449/photo/wooden-vintage-rabbit-a-wooden-vintage-rabbit-toy-is-sitting-on-the-old-books-with-pastel.jpg?s=612x612&w=0&k=20&c=yUZwlPMKbDLTNCM2yifwamZN6LMzrumwSnaBQiQJRLU="),
    new Recipe("Sample Recipe 2", "descripion 2", "https://media.istockphoto.com/id/1196705449/photo/wooden-vintage-rabbit-a-wooden-vintage-rabbit-toy-is-sitting-on-the-old-books-with-pastel.jpg?s=612x612&w=0&k=20&c=yUZwlPMKbDLTNCM2yifwamZN6LMzrumwSnaBQiQJRLU=")
  ]

  @Output() currentRecipeSeleted = new EventEmitter<Recipe>();

  onRecipeSeleted(recipe) {
    this.currentRecipeSeleted.emit(recipe);
  }

}
