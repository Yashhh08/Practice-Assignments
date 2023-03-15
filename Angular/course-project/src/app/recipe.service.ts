import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes/recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe("Sample Recipe 1", "descripion 1", "https://media.istockphoto.com/id/1196705449/photo/wooden-vintage-rabbit-a-wooden-vintage-rabbit-toy-is-sitting-on-the-old-books-with-pastel.jpg?s=612x612&w=0&k=20&c=yUZwlPMKbDLTNCM2yifwamZN6LMzrumwSnaBQiQJRLU="),
        new Recipe("Sample Recipe 2", "descripion 2", "https://media.istockphoto.com/id/1196705449/photo/wooden-vintage-rabbit-a-wooden-vintage-rabbit-toy-is-sitting-on-the-old-books-with-pastel.jpg?s=612x612&w=0&k=20&c=yUZwlPMKbDLTNCM2yifwamZN6LMzrumwSnaBQiQJRLU=")
    ]

    getRecipes() {
        return this.recipes;
    }

}