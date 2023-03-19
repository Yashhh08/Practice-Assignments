import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecipeService } from './../../recipe.service';
import { Recipe } from './../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editmode = false;

  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params["id"];
      this.editmode = params["id"] != null;
      this.inItForm();
    })
  }

  inItForm() {

    let name = "";
    let imageUrl = "";
    let description = "";

    if (this.editmode) {
      const recipe = this.recipeService.getRecipe(this.id);
      name = recipe.name;
      imageUrl = recipe.imagePath;
      description = recipe.description;
    }

    this.recipeForm = new FormGroup({
      "name": new FormControl(name, Validators.required),
      "imageUrl": new FormControl(imageUrl, Validators.required),
      "description": new FormControl(description, Validators.required)
    })
  }

  onSubmit() {  

    const recipe = new Recipe(this.recipeForm.value.name, this.recipeForm.value.description, this.recipeForm.value.imageUrl, []);

    this.recipeService.addRecipe(recipe);

    this.recipeForm.reset();
  }

  onCancle() {
    this.recipeForm.reset();
  }

}
