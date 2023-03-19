import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { RecipeService } from './../recipe.service';

@Injectable()
export class dataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService) {

    }

    storeRecipes() {

        const recipes = this.recipeService.getRecipes();

        this.http.put("https://angular-test-259cb-default-rtdb.firebaseio.com/recipes.json", recipes)
            .subscribe(response => { console.log(response) });

    }

    fetchRecipes() {
        this.http.get("https://angular-test-259cb-default-rtdb.firebaseio.com/recipes.json")
            .subscribe(response => { console.log(response) })
    }

}