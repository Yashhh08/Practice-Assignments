import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  form = new FormGroup({});

  model = {
    firstName: "",
    age: "",
    nationId: ""
  }

  fields: FormlyFieldConfig[] = [
    {
      key: "firstName",
      type: "input",
      props: {
        label: "FirstName",
        placeholder: "Enter First Name",
        required: true
      }
    },
    {
      key: "age",
      type: "input",
      props: {
        type: "number",
        label: "Age",
        placeholder: "Enter age",
        min: 18,
        required: true
      },
      validation: {
        messages: {
          min: "Minimum age is 18",
        }
      }
    },
    {
      key: "nationId",
      type: "select",
      props: {
        label: "Nation ID",
        options: [
          {
            value: 1,
            label: "Germany"
          },
          {
            value: 2,
            label: "India"
          }
        ]
      }
    }
  ]

  onSubmit(model: any) {
    console.log(model);
  }

}
