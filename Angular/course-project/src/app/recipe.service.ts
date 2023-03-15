import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipes/recipe.model";
import { Ingredient } from "./shared/ingredient.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            "Butter Chiken",
            "Butter chiken by chef Ranveer",
            "https://www.licious.in/blog/wp-content/uploads/2020/10/butter-chicken-.jpg",
            [
                new Ingredient("Chiken", 1),
                new Ingredient("Onion", 1)
            ]),
        new Recipe(
            "Butter Panner",
            "The best Butter Panner you will ever taste",
            "https://i2.wp.com/fforflavour.com/wp-content/uploads/2018/07/IMG_5518.jpg?w=1140&ssl=1",
            [
                new Ingredient("Panner", 1),
                new Ingredient("Onion", 1)
            ])
    ]

    getRecipes() {
        return this.recipes;
    }

}