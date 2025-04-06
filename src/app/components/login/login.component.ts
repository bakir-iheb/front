import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from '../../services/users.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // <-- Ajouté
  imports: [FormsModule, HttpClientModule, CommonModule], // <-- Ajouté HttpClientModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginEmail: string = '';
  loginPassword: string = '';
  signupName: string = '';
  signupLastname: string = '';
  signupEmail: string = '';
  signupPassword: string = '';
  errorMessage: string | null = null; // Pour afficher les erreurs

  constructor(
    private usersService: UsersService,
    private router: Router
  ) {}

  onLogin(): void {
    this.errorMessage = null;
    const authData = {
      email: this.loginEmail,
      password: this.loginPassword
    };
    
    this.usersService.login(authData).subscribe({
      next: (response: any) => {
        localStorage.setItem('authToken', response.mytoken);
        this.usersService.setCurrentUser(response.user);
        this.router.navigate(['/destination']);
      },
      error: (err) => {
        console.error('Login failed:', err);
        this.errorMessage = err.error?.message || 'Login failed. Please try again.';
      }
    });
  }

  onSignup(): void {
    this.errorMessage = null;
    const userData = {
      name: this.signupName,
      lastname: this.signupLastname,
      email: this.signupEmail,
      password: this.signupPassword
    };
    
    this.usersService.signup(userData).subscribe({
      next: () => {
        // Après inscription réussie, bascule vers le formulaire de login
        const checkBox = document.getElementById('check') as HTMLInputElement;
        if (checkBox) checkBox.checked = false;
        this.errorMessage = 'Signup successful! Please login.';
      },
      error: (err) => {
        console.error('Signup failed:', err);
        this.errorMessage = err.error?.message || 'Signup failed. Please try again.';
      }
    });
  }
}