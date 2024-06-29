import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  username!: string;
  password!: string;
  errorMessage!: string;

  constructor(private authService: AuthService) {}

  register() {
    this.authService.register(this.username, this.password).subscribe(
      (data) => {
        if (data.status === 'ok') {
          // Registration success, navigate to login page or perform other actions
          console.log('Registration success:', data.message);
          this.errorMessage = '';
        } else {
          // Registration error, display error message
          console.error('Registration error:', data.message);
          this.errorMessage = data.message;
        }
      },
      (error) => {
        console.error('Registration error:', error);
        this.errorMessage = 'An error occurred while registering.';
      }
    );
  }
}
