import { Component, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent {
  public Ingrediants = ['tomatoes', 'rice', 'cheese', 'chicken', 'red chilli', 'green chilli', 'onions', 'water'];
  public cuisineForm: FormGroup | any;
  public getArrayOfIngrediants: any = [];
  @ViewChild('checkbox') checkbox!: any;

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.cuisineFormModel();

  }

  cuisineFormModel() {
    this.cuisineForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
      description: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(60)]),
      quantity: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      price: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      Ingrediants: new FormArray([])
    })
  }

  getIngrediants(event: any) {
    if (event.target.checked) {
      this.getArrayOfIngrediants.push(event.target.value);
    } else {
      this.getArrayOfIngrediants = this.getArrayOfIngrediants.filter((item: any) => item !== event.target.value);
    }

    console.log(event.target.value);
  }

  onSubmit() {
    this.getArrayOfIngrediants.forEach((element: any) => {
      let formControl = new FormControl(element);
      this.cuisineForm.get('Ingrediants').push(formControl);
    });
    console.log(this.cuisineForm.value);
    this.cuisineForm.reset();
    this.getArrayOfIngrediants = [];
  }
}
