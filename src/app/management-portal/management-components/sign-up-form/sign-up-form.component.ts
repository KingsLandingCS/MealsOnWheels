import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit {
  public userRegisterForm: any | FormGroup;  // step 1. Create a property


  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly signupService: SignupService,
  ) { }
  ngOnInit(): void {
    this.buildMyRegisterForm();
  }

  buildMyRegisterForm() {
    this.userRegisterForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(35), Validators.pattern(/^[A-Za-z\s]*$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
  }

  submitRegisterForm() {                    // step 2. Create a Method
    const payload = this.userRegisterForm.value;
    console.log(payload);
  }

}
