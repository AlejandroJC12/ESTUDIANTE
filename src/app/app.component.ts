import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PagMainEstuComponent } from './estudiante/pag-main-estu/pag-main-estu.component';
import { ProfileEstuComponent } from './estudiante/profile-estu/profile-estu.component';
import { InserSkillEstuComponent } from './estudiante/inser-skill-estu/inser-skill-estu.component';
import { InserDataEstuComponent } from './estudiante/inser-data-estu/inser-data-estu.component';
import { ResetPasswordComponent } from './auth/reset-password/reset-password.component';
import { MisPostulacionesComponent } from './estudiante/mis-postulaciones/mis-postulaciones.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, PagMainEstuComponent, ProfileEstuComponent, InserSkillEstuComponent, InserDataEstuComponent, ResetPasswordComponent, MisPostulacionesComponent, ForgotPasswordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'techconnect-fronted-main';
  constructor(router: Router){
    
  }
}