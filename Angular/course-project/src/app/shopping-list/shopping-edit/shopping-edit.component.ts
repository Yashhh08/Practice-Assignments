import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shoppilg-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild("form") form: NgForm;

  constructor(private shoppingListService: ShoppingListService) { }

  onAdd() {

    const newIngredient = new Ingredient(this.form.value.name, this.form.value.amount);

    this.shoppingListService.addIngredient(newIngredient);
  }

}
