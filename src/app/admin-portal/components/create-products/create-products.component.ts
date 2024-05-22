import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent {
  public Ingrediants = ['tomatoes', 'rice', 'cheese', 'chicken', 'red chilli', 'green chilli', 'onions', 'water'];
  public cuisineForm: FormGroup | any;


  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cuisineFormModel();

  }

  cuisineFormModel() {
    this.cuisineForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      quantity: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      price: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      Ingrediants: new FormArray([])
    })
  }

  getIngrediants(event: any) {
    console.log(event);
  }

  onSubmit() {
    console.log(this.cuisineForm.value);
  }
}
