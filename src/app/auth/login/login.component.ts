import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email:string='';
  password: string='';
  errorMessage: string | null=null;
  successMessage:string|null=null;

constructor(
  private authService: AuthService,
  private router: Router,
) {}

  ngOnInit(): void {}

  onSubmit():void{
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        this.errorMessage= null;
        this.successMessage = response.mensaje;
        this.authService.setToken(response.access_token);
        this.authService.setRole(response.role);
        this.authService.setEmailVerified(response.email_verified)

        this.router.navigate(['/estudiante/home.estudiante']);
      },
      error: (error:Error)=>{
        console.log(this.errorMessage = error.message);
        this.errorMessage= 'El email o la contraseña no se encuentran registrados, revise sus credenciales'
      }
    })
  }
  addNumber(num: string) {
    this.password += num;
  }

  removeLastCharacter() {
    this.password = this.password.slice(0, -1);
  }

   // Esta función evita la entrada desde el teclado físico
   preventKeyboardInput(event: KeyboardEvent) {
    event.preventDefault();
  }
}
