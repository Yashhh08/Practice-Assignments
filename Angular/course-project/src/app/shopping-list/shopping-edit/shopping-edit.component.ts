import { Component, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';
import { ShoppingListService } from './../../shoppilg-list.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild("form") form: NgForm;

  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.shoppingListService.startedEditing.subscribe((index: number) => {
      this.editMode = true;
      this.editedItemIndex = index;
      this.editedItem = this.shoppingListService.getIngredient(index);

      this.form.setValue({
        name: this.editedItem.name,
        amount: this.editedItem.amount
      })
    })
  }

  onSubmit() {

    const newIngredient = new Ingredient(this.form.value.name, this.form.value.amount);

    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItemIndex, newIngredient);
    }
    else {
      this.shoppingListService.addIngredient(newIngredient);
    }

    this.editMode = false;

    this.form.reset();

  }

  onClear() {
    this.form.reset();
    this.editMode = false;
  }

  onDelete() {

    this.shoppingListService.deleteIngredient(this.editedItemIndex);

    this.onClear();


  }

}
