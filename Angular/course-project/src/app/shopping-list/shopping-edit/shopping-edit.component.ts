import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shoppilg-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild("nameInput") nameInputRef;
  @ViewChild("amountInput") amountInputRef;

  constructor(private shoppingListService: ShoppingListService) { }

  onAdd() {
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);

    this.shoppingListService.addIngredient(newIngredient);
  }

}
