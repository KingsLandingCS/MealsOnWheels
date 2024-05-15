import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/shared/admin-login/login.service';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.scss']
})
export class LogInFormComponent implements OnInit {

  public userLoginForm: any | FormGroup;  // step 1. Create a property
  public hide: boolean = true;


  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly loginService: LoginService,
    private readonly toastr: ToastrService,
  ) { }
  ngOnInit(): void {
    this.buildMyLoginForm();
  }

  toggle() {
    this.hide = !this.hide;
  }

  buildMyLoginForm() {
    this.userLoginForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }

  submitLoginForm() {                    // step 2. Create a Method
    const payload = this.userLoginForm.value;
    this.loginService.loginUser(payload).subscribe(({ result, body, data, token }: any) => {
      this.toastr[data ? "success" : "error"](result);
    });
  }
}
