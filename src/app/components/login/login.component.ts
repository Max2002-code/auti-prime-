import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username!: string;
  password!: string;
  errorMessage!: string;

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      (data) => {
        if (data.status === 'ok') {
          // Login success, navigate to home or dashboard page
          console.log('Login success:', data.message);
          this.errorMessage = '';
          // Example redirection to home page
          this.router.navigateByUrl('');
        } else {
          // Login error, display error message
          console.error('Login error:', data.message);
          this.errorMessage = data.message;
        }
      },
      (error) => {
        console.error('Login error:', error);
        this.errorMessage = 'An error occurred while logging in.';
      }
    );
  }
}
