import { RouterModule, Routes } from "@angular/router";
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule } from '@angular/core';

const appRoutes: Routes = [
    { path: "", component: RecipesComponent },
    { path: "recipes", component: RecipesComponent },
    { path: "shoppingList", component: ShoppingListComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}