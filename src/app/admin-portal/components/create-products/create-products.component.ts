import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent {
  public Ingrediants = ['tomatoes', 'rice', 'cheese', 'chicken', 'red chilli', 'green chilli', 'onions', 'water'];
  public cuisineForm: FormGroup | any;
  public getArrayOfIngrediants: any = [];
  @ViewChildren('checkbox') checkbox: QueryList<ElementRef> | any;
  @ViewChild('file') file: ElementRef | any;
  public imageArray: any = [];

  constructor(private readonly formBuilder: FormBuilder, private readonly toaster: ToastrService) { }

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

  // onFileChange(event: any) {
  //   console.log(event);
  // }

  onFileChange(event: any) {
    console.log(event.target.files);
    if (event.target.files.length <= 5) {
      [event.target.files].forEach((element: any) => {
        this.imageArray.push(element);
      })
    } else {
      this.imageArray = [];
      this.file.nativeElement.value = null;
      this.toaster.warning('Only 5 images are allowed');
    }
  }

  onSubmit() {
    this.getArrayOfIngrediants.forEach((element: any) => {
      let formControl = new FormControl(element);
      this.cuisineForm.get('Ingrediants').push(formControl);
    });
    console.log(this.cuisineForm.value);
    let multiPartFormData = new FormData();
    this.imageArray.forEach((element: any) => {
      multiPartFormData.append('image', element);
    });
    multiPartFormData.append('name', this.cuisineForm.get('name').value);
    multiPartFormData.append('description', this.cuisineForm.get('description').value);
    multiPartFormData.append('quantity', this.cuisineForm.get('quantity').value);
    multiPartFormData.append('price', this.cuisineForm.get('price').value);
    multiPartFormData.append('Ingrediants', this.cuisineForm.get('Ingrediants').value);
    console.log(multiPartFormData);
    this.cuisineForm.reset();
    this.checkbox?.forEach((element: any) => {
      element.nativeElement.checked = false
    })
    this.getArrayOfIngrediants = [];
  }
}
