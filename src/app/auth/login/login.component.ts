import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;
  showModal: boolean = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Implement your login logic here
      console.log(this.loginForm.value);
    }
  }

  addKeyValue(value: string): void {
    const currentPasswordValue = this.loginForm.get('password')?.value;
    this.loginForm.get('password')?.setValue(currentPasswordValue + value);
  }

  removeLastKeyValue(): void {
    const currentPasswordValue = this.loginForm.get('password')?.value;
    this.loginForm.get('password')?.setValue
(currentPasswordValue.slice(0, -1));
  }

  openForgotPasswordModal(event: Event): void {
    event.preventDefault();
    this.showModal = true;
  }

  closeForgotPasswordModal(): void {
    this.showModal = false;
  }

  onForgotPasswordSubmit(): void {
    if (this.forgotPasswordForm.valid) {
      // Implement your forgot password logic here
      console.log(this.forgotPasswordForm.value);
      // Optionally close the modal after submission
      this.closeForgotPasswordModal();
    }
  }
}