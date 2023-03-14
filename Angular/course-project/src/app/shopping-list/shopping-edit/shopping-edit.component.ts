import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { Ingredient } from './../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

  @ViewChild("nameInput") nameInputRef;
  @ViewChild("amountInput") amountInputRef;

  @Output() onAddedIngredient = new EventEmitter<Ingredient>();

  onAdd() {
    this.onAddedIngredient.emit(new Ingredient(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value));
  }

}
