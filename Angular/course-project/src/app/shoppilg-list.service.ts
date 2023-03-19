import { Ingredient } from "./shared/ingredient.model";
import { EventEmitter } from '@angular/core';

export class ShoppingListService {

    startedEditing = new EventEmitter<number>();

    private ingredients: Ingredient[] = [
        new Ingredient("Apples", 5),
        new Ingredient("Tomatoes", 10)
    ]

    getIngredients() {
        return this.ingredients;
    }

    getIngredient(index) {
        return this.ingredients[index];
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
    }

    addIngredients(ingredients: Ingredient[]) {
        this.ingredients.push(...ingredients);
    }

    updateIngredient(index: number, newIngredient: Ingredient) {
        this.ingredients[index] = newIngredient;
    }

    deleteIngredient(index: number) {
        this.ingredients.splice(index, 1);
    }

}