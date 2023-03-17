import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild("form") BasicForm: NgForm;

  selectedSubscription="Basic"

  onSubmit() {
    console.log(this.BasicForm.value);
  }

}
